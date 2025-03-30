import mysql from 'mysql2';
import jwt from 'jsonwebtoken';
require('dotenv').config();


// Database connection
const db = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

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

export default async function handler(req, res) {
    if(req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowe '});
    }

        try {
        const token = req.cookies.token; // Get token from cookie
        const decodedUser = verifyToken(token); // Verify JWT token

        if(!decodedUser) {
            // If token is invalid, return 401 unauthorized response
            return res.status(401).json({ message: 'Unauthorized. Please log in.' });
        }

        // Get picks data from request body
        const { bracketData } = req.body;

        if(!bracketData) {
            return res.status(400).json({ message: 'No picks data provided' });
        }

        const userId = decodedUser.userId;

        // Prepare query to insert picks
        const insertQuery = `
        INSERT INTO picks (user_id, game_id, winner_id)
        VALUES(?, ?, ?)
        ON DUPLICATE KEY UPDATE winner_id = VALUES(winner_id)
        `;

        const insertPromises = Object.entries(bracketData).flatMap(([region, games]) => 
        Object.entries(games).map(async([gameId, team]) => {
            return db.execute(insertQuery, [userId, gameId, team.id]) // Ensure teams.id is being stored as winner_id
        })
    );

    await Promise.all(insertPromises);

    return res.status(200).json({ success: true, message: 'Picks submitted successfully' });
    
    } catch(error) {
        console.error('Error submitting picks:', error);
        return res.status(500).json({ success: false, message: 'Internal Server Error '});
    }

}

