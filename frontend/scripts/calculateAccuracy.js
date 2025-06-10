const { pool } = require('../src/db/db');


async function calculateAccuracy () {

    try {
        const [results] = await pool.execute (`
            SELECT
                p.user_id,
                p.bracket_id,
                COUNT(*) AS total_predictions,
                SUM(p.is_correct = 1) AS correct_predictions,
                ROUND(SUM(p.is_correct = 1) / COUNT(*) * 100, 2) AS accuracy_percentage
            FROM predictions p
            WHERE p.is_correct IS NOT NULL
            GROUP BY p.user_id, p.bracket_id
            `
        );

            console.log("Accuracy results:", results);

        // Update brackets with new values
        for (const row of results) {
            await pool.execute(`
                UPDATE brackets
                SET
                    total_predictions = ?,
                    correct_predictions = ?,
                    accuracy_percentage = ?
                WHERE id = ? AND user_id = ?
                `,
                [
                    row.total_predictions,
                    row.correct_predictions,
                    row.accuracy_percentage,
                    row.bracket_id,
                    row.user_id,
                ]
            );
        }

        console.log('✅ Accuracy stats updated for all brackets.');

    } catch(error) {
        console.error('❌ Error calculating/updating accuracy:', error);
    } 
}

calculateAccuracy();