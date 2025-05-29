import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';
import { pool } from '@/db/db';
require('dotenv').config();


// Utility function to verify JWT token
const verifyToken = (token) => {

    const secretKey = process.env.JWT_SECRET;

    if(!secretKey) {
        throw new Error('JWT secret key is not defined in the environment variables');
    }

    try {
        const decoded = jwt.verify(token, secretKey);
        return decoded; // Returns user info (user_id, ect)
    } catch(error) {
        return null;
    }
};

export async function POST(req) {

    try {
        const token = req.cookies.get('token')?.value; 
        const decodedUser = verifyToken(token); // Verify JWT token

        if(!decodedUser) {
            // If token is invalid, return 401 unauthorized response
            return NextResponse.json({ message: 'Unauthorized. Please log in.' });
        }

        // Get picks data from request body
        const { bracketData, bracket_id } = await req.json();

        // console.log('Received bracketData:', bracketData);
        console.log('Received bracketId:', bracket_id);

        if(!bracketData || !bracket_id) {
            return NextResponse.json({ message: 'Missing bracket data or bracket ID.' });
        }

        const userId = decodedUser.userId;

        // Prepare query to insert picks
        const insertQuery = 
            `INSERT INTO predictions (user_id, bracket_id, game_id, winner_id)
            VALUES(?, ?, ?, ?)
            ON DUPLICATE KEY UPDATE winner_id = VALUES(winner_id)`;

            // console.log('Query:', insertQuery);
            // console.log('Using userId:', userId);
            // console.log('Using bracket_id:', bracket_id);
            
        const insertPromises = Object.entries(bracketData).map(([gameId, team]) => {
            const winnerId = team?.winnerId;

            if(!winnerId){
                console.warn(`Skipping game ${gameId} - missing team or team.id`);
                return Promise.resolve(undefined);
            }

            console.log(`Preparing to insert: user_id = ${userId}, bracket_id = ${bracket_id}, game_id = ${gameId}, winner_id = ${team.id}`);
           
            return pool.execute(insertQuery, [userId, bracket_id, gameId, winnerId]) // Ensure teams.id is being stored as winner_id
            .then(([result]) => {
                console.log(`Inserted pick for game ${gameId}`);
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

        const [rows] = await pool.execute(
            `SELECT * 
            FROM predictions 
            WHERE bracket_id = ?`, 
            [bracket_id]
        );
        console.log('Predictions now in DB:', rows.length);

        return NextResponse.json({ success: true, message: 'Picks submitted successfully' });

    } catch(error) {
        console.error('Error submitting picks:', error);
        return NextResponse.json({ success: false, message: 'Internal Server Error '});
    } 
}