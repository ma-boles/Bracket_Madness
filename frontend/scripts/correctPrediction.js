const mysql = require('mysql2');
require('dotenv').config();
const { connectionToDatabase } = require('../src/db/db');

async function correctPrediction () {
    const db = await connectionToDatabase();

    try {
        const [rows] = await db.execute (`
            UPDATE predictions p 
            JOIN results r ON p.game_id = r.game_id
            SET p.is_correct = (p.winner_id = r.winner_id)
            WHERE r.is_finalized = 1;   
            `
        );

        console.log(`Updated ${result.affectedRows} predictions.`);

    } catch(error) {
        console.error('Error marking is_correct:', error)
    } finally {
        await db.end();
    }
}

correctPrediction();