import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';
import { pool } from '@/src/db/db';


// Utility function to verify JWT token
const verifyToken = (token) => {

    const secretKey = process.env.JWT_SECRET;

    if(!secretKey) {
        throw new Error('JWT secret key is not defined in the environment variables');
    }

    try {
        const decoded = jwt.verify(token, secretKey);
        return decoded; // Returns user info (user_id, etc.)
    } catch(error) {
        return null;
    }
};

export async function POST(req) {

    try {
        const token = req.cookies.get('token')?.value; 
        const decodedUser = verifyToken(token);

        if(!decodedUser) {
            return NextResponse.json({ message: 'Unauthorized. Please log in.' });
        }

        const { bracketData, bracket_id, pool_id } = await req.json();

        if(!bracketData || !bracket_id) {
            return NextResponse.json({ message: 'Missing bracket data or bracket ID.' });
        }

        const userId = decodedUser.userId;

        // Prepare query to insert picks
        const insertQuery = 
            `INSERT INTO predictions (user_id, bracket_id, game_id, winner_id)
            VALUES(?, ?, ?, ?)
            ON DUPLICATE KEY UPDATE winner_id = VALUES(winner_id)`;
            
        const insertPromises = Object.entries(bracketData).map(([gameId, team]) => {
            const winnerId = team?.winnerId;

            if(!winnerId){
                console.warn(`Skipping game ${gameId} - missing team or team.id`);
                return Promise.resolve(undefined);
            }
           
            // Ensure teams.id is being stored as winner_id
            return pool.execute(insertQuery, [userId, bracket_id, gameId, winnerId]) 
            .then(([result]) => {
                return result;
            })
            .catch((err) => {
                console.error(`Failed to insert for game ${gameId}`, err.message);
            return undefined;
            })
        });

        const results = await Promise.all(insertPromises);
        const insertCount = results.filter(r => r !== undefined).length;

        if(insertCount === 0) {
            return NextResponse.json({ success: false, message: 'No picks were inserted'});
        }

        // Update brackets submitted flag
        if(pool_id) {
            await pool.execute(
                `UPDATE pool_membership
                SET bracket_submitted = true
                WHERE user_id = ? AND pool_id = ?`,
            [userId, pool_id]
        );        
    }
    
    // Double checking if all picks were submitted
        const [rows] = await pool.execute(
            `SELECT * 
            FROM predictions 
            WHERE bracket_id = ?`, 
            [bracket_id]
        );

        return NextResponse.json({ success: true, message: 'Picks submitted successfully' });

    } catch(error) {
        console.error('Error submitting picks:', error);
        return NextResponse.json({ success: false, message: 'Internal Server Error '});
    } 
}