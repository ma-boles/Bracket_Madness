import { pool } from "@/src/db/db";


const finalizeAllScoredGames = async () => {

    try {
        const [result] = await pool.execute(`
            UPDATE results
            SET is_finalized = 1
            WHERE winner_id IS NOT NULL AND is_finalized = 0
            `);

    } catch (error) {
        console.error('Error finalizing games:', error);
    } 
};

module.exports = finalizeAllScoredGames;