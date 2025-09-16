import { pool } from "@/src/db/db";


// Function to update database
const updateDatabase = async (gameInfo) => {  
  
  try {
      // Fetch the winner's ID from the `teams` table
          const [winnerRows] = await pool.execute(
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

            if(
              !gameInfo.espn_game_id ||
              !gameInfo.team_a_id ||
              !gameInfo.team_b_id ||
              winnerId === null
            ) {
              console.error(`Missing required game info for game${gameInfo.game_id}.`);
              return;
            }

            // Now update the `results` table with all necessary info
              await pool.execute(
                `UPDATE results 
                  SET 
                    espn_game_id = ?, 
                    team_a_id = COALESCE(team_a_id, ?), 
                    team_a_score = ?, 
                    team_b_id = COALESCE(team_b_id, ?), 
                    team_b_score = ?, 
                    winner_id = ?,
                    is_finalized = 1,
                  WHERE game_id = ?`,
               values
              );
              
              // Update is_finalized column to true
              await pool.execute(
                `UPDATE results
                  SET is_finalized = 1
                  WHERE game_id = ?`,
                [gameInfo.game_id]
              );

            } catch(error) {
              console.error('Error running score sync:', error);
            } 
  };

module.exports = updateDatabase;