const { connectionToDatabase } = require('../src/db/db');

const finalizeAllScoredGames = async () => {
    const db = await connectionToDatabase();

    try {
        const [result] = await db.execute(`
            UPDATE results
            SET is_finalized = 1
            WHERE winner_id IS NOT NULL AND is_finalized = 0
            `);

            console.log(`Marked ${result.affectedRows} games as finalized.`)
    } catch (error) {
        console.error('Error finalizing games:', error);
    } finally {
        await db.end();
    }
};

finalizeAllScoredGames();