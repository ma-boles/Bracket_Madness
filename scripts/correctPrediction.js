import { pool } from "@/src/db/db";


const correctPrediction = async () => {

    try {
        const [result] = await pool.execute (`
            UPDATE predictions p 
            JOIN results r ON p.game_id = r.game_id
            SET p.is_correct = (p.winner_id = r.winner_id)
            WHERE r.is_finalized = 1;   
            `
        );

    } catch(error) {
        console.error('Error marking is_correct:', error)
    } 
}

module.exports = correctPrediction;