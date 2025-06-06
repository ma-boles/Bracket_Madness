import jwt from 'jsonwebtoken';
import { pool } from '@/db/db';
import { NextResponse } from 'next/server';


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

        const { bracket_name, pool_id } = await req.json();
        const userId = decodedUser.userId;

        // Prepare query to insert bracket data
        const [result] = await pool.execute ( `
            INSERT INTO brackets (user_id, bracket_name, pool_id)
            VALUES(?, ?, ?)`, [userId, bracket_name || null, pool_id || null]
        );

        const bracketId = result.insertId;
        let finalName = bracket_name;

        // Generate default name
        if(!bracket_name) {
            const shortYear = new Date().getFullYear().toString().slice(-2);
            finalName = `Challenge${shortYear}_00${bracketId}`;
            await pool.execute(
                `UPDATE brackets SET bracket_name = ? WHERE id = ?`,
                [finalName, bracketId]
            );
        }

        // Update pool_membership with new bracket id
        await pool.execute(`
            UPDATE pool_membership
            SET bracket_id = ?
            WHERE user_id = ? AND pool_id = ?`,
        [bracketId, userId, pool_id]
    );
        return NextResponse.json({ success: true, bracket_id: bracketId, bracket_name: finalName });

    } catch(error) {
        console.error('Error submitting bracket data:', error);
        return NextResponse.json({ success: false, message: 'Internal Server Error '});
     } 
}