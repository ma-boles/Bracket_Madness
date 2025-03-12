const mysql = require('mysql2');
require('dotenv').config();


// Database connection
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Constraints for scoring
const ROUND_MULTIPLIERS = { 'First_Four': 1, 'Rd_1': 2, 'Rd_2': 3, 'Sweet_Sixteen': 4, 'Elite_Eight': 5, 'Final_Four': 6, 'Championship': 7 };
const MAX_BONUS = 50;

async function calculateScores () {
    const connection = await pool.getConnection();
    try {
        // Fetch user picks and game results
        const [picks] = await connection.query(`
            SELECT p.user_id, p.game_id, p.predicted_winner, r.actual_winner
            FROM picks p
            JOIN results r ON p.game_id = r.game_id`
        );

        let userScores = {};

        for(const pick of picks) {
            if(pick.predicted_winner === pick.actual_winner) {
                const higherSeed = Math.max(pick.seed1, seed2);
                const lowerSeed = Math.min(pick.seed1, seed2);
                let points = (higherSeed - lowerSeed + 10) * ROUND_MULTIPLIERS[pick.round];
                points = Math.min(points, MAX_BONUS); // Cap bonus

                if(!userScores[pick.user_id]) {
                    userScores[pick.user_id] = 0;
                }
                userScores[pick.user_id] += points;
            }
        }

        // Update user points
        for(const [user_id, total_points] of Object.entries(userScores)) {
            await connection.query(`
                UPDATE points SET total_points = total_points + ? WHERE user_id = ?
            `, [total_points, user_id]);
        }

        console.log('Scores updated successfully!');
    } catch(error) {
        console.error('Error calculating scores:', error);
    } finally {
        connection.release();
    }
}

calculateScores();