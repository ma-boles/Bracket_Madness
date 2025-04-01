const axios = require("axios");

// Function to update database
const updateDatabase = async (storedGames, espnGames) => {
    try {
      storedGames.forEach((storedGame) => {
        const matchingEspnGame = espnGames.find((game) => {
          const teamNames = game.teams.map((t) => t.name);
          return (
            teamNames.includes(storedGame.team_a_name) &&
            teamNames.includes(storedGame.team_b_name)
          );
        });
  
        if (matchingEspnGame) {
          const team1 = matchingEspnGame.teams.find(
            (t) => t.name === storedGame.team_a_name
          );
          const team2 = matchingEspnGame.teams.find(
            (t) => t.name === storedGame.team_b_name
          );
  
          if (team1 && team2) {
            // Determine the winner's name
            const winnerName = team1.winner
              ? storedGame.team_a_name
              : storedGame.team_b_name;
  
            // Fetch the winner's ID from the `teams` table
            connection.query(
              `SELECT team_id FROM teams WHERE team_name = ? LIMIT 1`,
              [winnerName],
              (err, result) => {
                if (err) {
                  console.error("Error fetching winner ID:", err);
                  return;
                }
                if (result.length === 0) {
                  console.error(
                    "Winner ID not found for team:",
                    winnerName
                  );
                  return;
                }
  
                const winnerId = result[0].team_id;
  
                // Now update the `results` table with all necessary info
                connection.query(
                  `UPDATE results 
                   SET espn_game_id = ?, team_a_score = ?, team_b_score = ?, winner_id = ?
                   WHERE game_id = ?`,
                  [
                    matchingEspnGame.espnGameId,
                    team1.score,
                    team2.score,
                    winnerId, // Use winner_id instead of team name
                    storedGame.game_id,
                  ],
                  (updateErr, updateResult) => {
                    if (updateErr) {
                      console.error(
                        "Error updating results table:",
                        updateErr
                      );
                    } else {
                      console.log(
                        `Updated game ${storedGame.game_id} with winner ${winnerName} (ID: ${winnerId})`
                      );
                    }
                  }
                );
              }
            );
          }
        }
      });
    connection.end();
    } catch(error) {
      console.error('Error in updateDatabase:', error);
    }
};

module.exports = { updateDatabase };