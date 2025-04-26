const mysql = require('mysql2');
require('dotenv').config();
const { connectionToDatabase } = require('../src/db/db');




// Constraints for scoring
const ROUND_MULTIPLIERS = { 
    'First Four': 1, 
    '1st Round': 2, 
    '2nd Round': 3, 
    'Sweet 16': 4, 
    'Elite 8': 5, 
    'Final Four': 6, 
    'Championship': 7 
};
const MAX_BONUS = 50;
const BASE_POINTS = 10;

async function calculateScores () {
    const db = await connectionToDatabase();
    try {
        // Join brackets, predictions, and results tables
        const [predictions] = await db.execute(`
            SELECT 
                p.user_id, 
                p.game_id, 
                p.bracket_id,
                p.winner_id AS predicted_winner,
                r.winner_id AS actual_winner,
                r.round,
                ta.seed AS seed1,
                tb.seed AS seed2,
                t.seed AS actual_winner_seed
            FROM predictions p
            JOIN results r ON p.game_id = r.game_id
            JOIN brackets b ON p.bracket_id = b.id
            JOIN teams ta ON r.team_a_id = ta.team_id
            JOIN teams tb ON r.team_b_id = tb.team_id
            JOIN teams t ON r.winner_id = t.team_id
            WHERE p.is_scored = 0
                AND r.is_finalized = 1
            `
        );


        let insertValues = [];

        for(const prediction of predictions) {

            let points = 0;

            if(prediction.predicted_winner === prediction.actual_winner) {
                // Use actual_winner_seed from query and assign opponent_seed to other team
                const actual_winner_seed = prediction.actual_winner_seed;
                const opponent_seed = prediction.actual_winner === prediction.team_a_id 
                    ? prediction.seed2 
                    : prediction.seed1;

                // Determine seed difference
                const seedDifference = actual_winner_seed - opponent_seed;


                const BONUS = Math.max(seedDifference, 0);

                points = (BASE_POINTS + BONUS) * ROUND_MULTIPLIERS[prediction.round];
                points = Math.min(points, MAX_BONUS);
            }
                insertValues.push([prediction.user_id, prediction.bracket_id, prediction.round, prediction.game_id, points])
        }

        if(insertValues.length > 0) {
            const placeholders = insertValues.map(() => '(?, ?, ?, ?, ?)').join(', ');
            const flattenedValues = insertValues.flat();

            console.log('Insert values:', insertValues);

            try {
                await db.execute(`
                    INSERT into points (user_id, bracket_id, round, game_id, awarded_points)
                    VALUES ${placeholders}
                    ON DUPLICATE KEY UPDATE
                    awarded_points = VALUES(awarded_points)
                `, flattenedValues);
    
                console.log('Scores updated successfully!:');

                // Update predictions.is_scored to true
                const updateValues = insertValues.map(val => val[0], val[1], val[3]);

                if(updateValues.length > 0) {
                    const updatePlacholders = updateValues.map(() => '?', '?', '?').join(', ');
                    const flattenedUpdateValue = updateValues.flatten

                    await db.execute(`
                        UPDATE predictions
                        SET is_scored = 1
                        WHERE (user_id, bracket_id, game_id) IN (${updatePlacholders})
                        `, flattenedUpdateValue);

                console.log('Predictions marked as scored!');

                }
            } catch(error) {
                console.error('Error during insert:', error);
            }
        }
    } catch(error) {
        console.error('Error calculating scores:', error);
    } finally {
        await db.end();
    }
}

calculateScores();