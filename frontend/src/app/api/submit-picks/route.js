import mysql from 'mysql2';
import jwt from 'jsonwebtoken';
import connectionToDatabase from '../src/db/db';
import { NextResponse } from 'next/server';
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
    let db;

    try {
        // Database connection
        const db = await connectionToDatabase();
        const token = req.cookies.get('token')?.value; 
        const decodedUser = verifyToken(token); // Verify JWT token

        if(!decodedUser) {
            // If token is invalid, return 401 unauthorized response
            return NextResponse.json({ message: 'Unauthorized. Please log in.' });
        }

        // Get picks data from request body
        const { bracketData } = await req.json();

        if(!bracketData) {
            return NextResponse.json({ message: 'No picks data provided' });
        }

        const userId = decodedUser.userId;

        // Prepare query to insert picks
        const insertQuery = `
            INSERT INTO picks (user_id, game_id, winner_id)
            VALUES(?, ?, ?)
            ON DUPLICATE KEY UPDATE winner_id = VALUES(winner_id)`
            ;

        const insertPromises = Object.entries(bracketData).map(([gameId, team]) => {
            if(!team || !team.id) return Promise.resolve();

            return db.execute(insertQuery, [userId, gameId, team.id]); // Ensure teams.id is being stored as winner_id
        });

        await Promise.all(insertPromises);

        return NextResponse.json({ success: true, message: 'Picks submitted successfully' });

    } catch(error) {
        console.error('Error submitting picks:', error);
        return NextResponse.json({ success: false, message: 'Internal Server Error '});
    } finally {
        if (db) await db.end();
    }
}