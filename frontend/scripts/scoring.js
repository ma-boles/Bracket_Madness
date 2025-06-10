import { pool } from '../src/db/db';
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

const ROUND_TO_COLUMN = {
    'First Four': 'first_four_points', 
    '1st Round': 'first_round_points', 
    '2nd Round': 'second_round_points', 
    'Sweet 16': 'sweet16_points', 
    'Elite 8': 'elite8_points', 
    'Final Four': 'final4_points', 
    'Championship': 'championship_points' 
};

const MAX_BONUS = 50;
const BASE_POINTS = 10;

async function calculateScores () {
    try {
        // Join brackets, predictions, and results tables
        const [predictions] = await pool.execute(`
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

            // console.log('Insert values:', insertValues);

            try {
                await pool.execute(`
                    INSERT into points (user_id, bracket_id, round, game_id, awarded_points)
                    VALUES ${placeholders}
                    ON DUPLICATE KEY UPDATE
                    awarded_points = VALUES(awarded_points)
                `, flattenedValues);
    
                console.log('Scores updated successfully!:');

                // Update predictions.is_scored to true
                const updateValues = insertValues.map(val => [val[0], val[1], val[3]]);

                if(updateValues.length > 0) {
                    const updatePlaceholders = updateValues.map(() => `(?, ?, ?)`).join(', ');
                    const flattenedUpdateValue = updateValues.flat();

                    await pool.execute(`
                        UPDATE predictions
                        SET is_scored = 1
                        WHERE (user_id, bracket_id, game_id) IN (${updatePlaceholders})
                        `, flattenedUpdateValue);

                console.log('Predictions marked as scored!');

                // Sum all awarded points 
                const [totals] = await pool.execute(`
                    SELECT bracket_id, SUM(awarded_points) as total_points
                    FROM points
                    GROUP BY bracket_id
                `);

                const sortedTotals = totals.sort((a, b) => b.total_points - a.total_points);
                let currentRank = 1;
                let previousPoints = null;
                let displayRank = 1;

                const updatePromises = sortedTotals.map(({ bracket_id, total_points }) => {
                    if (total_points !== previousPoints) {
                        displayRank = currentRank;
                    }

                    previousPoints = total_points;
                    currentRank++;

                    return pool.execute(`
                        UPDATE brackets
                        SET total_points = ?, rank = ?
                        WHERE id = ?`, 
                    [total_points, displayRank, bracket_id]);
                });

                await Promise.all(updatePromises);
                console.log('Bracket total points updated successfully.');


                // Fetch brackets pool rank
                const [pools] = await pool.execute(
                    `SELECT DISTINCT pool_id
                    FROM brackets
                    WHERE pool_id IS NOT NULL`
                );

                for(const { pool_id } of pools) {
                    const [brackets] = await pool.execute(
                        `SELECT id,
                            total_points
                          FROM brackets
                          ORDER BY total_points DESC`,
                          [pool_id]
                    );

                    let currentRank = 1;
                    let previousPoints = null;
                    let displayRank = 1;

                const updatePromises = sortedTotals.map(({ id, total_points }) => {
                    if (total_points !== previousPoints) {
                        displayRank = currentRank;
                    }

                    previousPoints = total_points;
                    currentRank++;

                    return pool.execute(`
                        UPDATE brackets
                        SET pool_rank = ?
                        WHERE id = ?`, 
                    [ poolRank, id]);
                });     

                await Promise.all(updatePromises);
                console.log('Pool rank updated successfully.');

            }
                  

                // Update round totals
                const [round_totals] = await db.execute(`
                    SELECT bracket_id, round, SUM(awarded_points) as round_points
                    FROM points
                    GROUP BY bracket_id, round
                `);


                // Update each bracket with sum total
                const updateRounds = round_totals.map(({ bracket_id, round, round_points}) => {
                    const column = ROUND_TO_COLUMN[round];
                    // console.log('Round:', round);

                    if(!column) {
                        console.error('Invalid round:', round);
                        return null;
                    }

                    return pool.execute(`
                        UPDATE brackets
                        SET ${column} = ?
                        WHERE id = ?`, 
                    [round_points, bracket_id]);
                });

                // Filter out null returns
                await Promise.all(updateRounds.filter(Boolean));

                console.log('Bracket round points updated successfully.')
            }
                } catch(error) {
                console.error('Error during insert:', error);
            }
        }
    } catch(error) {
        console.error('Error calculating scores:', error);
    }
}

calculateScores();