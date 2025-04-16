const { connectionToDatabase } = require('../src/db/db');
const axios = require("axios");

// Function to update database
const updateDatabase = async (gameInfo) => {  
  const connection = await connectionToDatabase();
  
  try {
      // Fetch the winner's ID from the `teams` table
          const [winnerRows] = await connection.execute(
            `SELECT team_id FROM teams WHERE team_name = ? LIMIT 1`,
            [gameInfo.winner],
          );

            if (winnerRows.length === 0) {
              console.error("Winner ID not found for team:", gameInfo.winner);
              return;
            }
  
            const winnerId = winnerRows[0].team_id;

            const values = [
              gameInfo.espn_game_id,
              gameInfo.team_a_id,
              gameInfo.team_a_score,
              gameInfo.team_b_id,
              gameInfo.team_b_score,
              winnerId, 
              gameInfo.game_id,
            ];

            console.log('Running query with values:', values);
            // console.log('Types:', values.map(val => typeof val));

            // Now update the `results` table with all necessary info
              await connection.execute(
                `UPDATE results 
                  SET 
                  espn_game_id = ?, 
                  team_a_id = COALESCE(team_a_id, ?), 
                  team_a_score = ?, 
                  team_b_id = COALESCE(team_b_id, ?), 
                  team_b_score = ?, 
                  winner_id = ?
                  WHERE game_id = ?`,
               values
              );

              console.log(`Updated game ${gameInfo.game_id} successfully.`);
            } catch(error) {
              console.error('Error running score sync:', error);
            } finally {
              await connection.end();
            }
  };

module.exports = updateDatabase;