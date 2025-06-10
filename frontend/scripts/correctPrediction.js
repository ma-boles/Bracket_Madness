import { pool } from '../src/db/db';

async function correctPrediction () {

    try {
        const [result] = await pool.execute (`
            UPDATE predictions p 
            JOIN results r ON p.game_id = r.game_id
            SET p.is_correct = (p.winner_id = r.winner_id)
            WHERE r.is_finalized = 1;   
            `
        );

        console.log(`Updated ${result.affectedRows} predictions.`);

    } catch(error) {
        console.error('Error marking is_correct:', error)
    } 
}

correctPrediction();