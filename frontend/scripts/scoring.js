const mysql = require('mysql2');
require('dotenv').config();
import { connectionToDatabase } from '@/db/db';


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
            JOIN teams ta ON r.team_a_id = ta.id
            JOIN teams tb ON r.team_b_id = tb.id
            JOIN teams t ON r.winner_id = t.team_id`
        );

        let userScores = {};
        let insertValues = [];

        for(const prediction of predictions) {
            if(prediction.predicted_winner === prediction.actual_winner) {

                // Use actual_winner_seed from query and assign opponent_seed to other team
                const actual_winner_seed = prediction.actual_winner_seed;
                const opponent_seed = prediction.actual_winner === prediction.team_a_id 
                    ? prediction.seed2 
                    : prediction.seed1;

                // Determine seed difference
                const seedDifference = actual_winner_seed - opponent_seed;

                // Skip if difference is less than 0
                if(seedDifference < 0) {
                    continue;
                }

                const BONUS = seedDifference;

                let points = (BASE_POINTS + BONUS) * ROUND_MULTIPLIERS[prediction.round];
                points = Math.min(points, MAX_BONUS);

                insertValues.push([prediction.user_id, prediction.bracket_id, prediction.round, points])
            }
        }

        if(insertValues.length > 0) {
            await db.execute(`
                INSERT into points (user_id, bracket_id, round, awarded_points)
                VALUES ?
                ON DUPLICATE KEY UPDATE
                awarded_points = VALUES(awarded_points)
            `, [insertValues]);

            console.log('Scores updated successfully!');
        }
    } catch(error) {
        console.error('Error calculating scores:', error);
    } finally {
        await db.end();
    }
}

calculateScores();