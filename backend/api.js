  const axios = require("axios");


  // Fetch stored matchups from db
  const getStoredGames = () => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT 
              r.game_id,
              t1.team_name AS team_a_name,
              t2.team_name AS team_b_name
          FROM results r
          JOIN teams t1 ON r.team_a_id = t1.team_id
          JOIN teams t2 ON r.team_b_id = t2.team_id`,
          (err, results) => {
            if(err) {
              reject(err);
            } else {
              resolve(results);
            }
          }
      );
    });
  };


// Function to fetch scores from ESPN API
const fetchScores = async () => {
  try {
    const url =
      "https://site.api.espn.com/apis/site/v2/sports/basketball/womens-college-basketball/scoreboard?groups=50&dates=20250319";
    const response = await axios.get(url);

    const espnGames = response.data.events.map((game) => ({
      espnGameId: game.id,
      teams: game.competitions[0].competitors.map((team) => ({
        name: team.team.displayName,
        score: parseInt(team.score, 10),
        winner: team.winner, // true if team won
      })),
    }));

    return espnGames;
  } catch (error) {
    console.error("❌ Error fetching data:", error.message);
  }
};

    // Function to update database
    const updateDatabase = async () => {
      try {
        const storedGames = await getStoredGames();
        const espnGames = await fetchScores();
    
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
              // ✅ Step 1: Determine the winner's name
              const winnerName = team1.winner
                ? storedGame.team_a_name
                : storedGame.team_b_name;
    
              // ✅ Step 2: Fetch the winner's ID from the `teams` table
              connection.query(
                `SELECT team_id FROM teams WHERE team_name = ? LIMIT 1`,
                [winnerName],
                (err, result) => {
                  if (err) {
                    console.error("❌ Error fetching winner ID:", err);
                    return;
                  }
                  if (result.length === 0) {
                    console.error(
                      "❌ Winner ID not found for team:",
                      winnerName
                    );
                    return;
                  }
    
                  const winnerId = result[0].team_id;
    
                  // ✅ Step 3: Now update the `results` table with all necessary info
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
                          "❌ Error updating results table:",
                          updateErr
                        );
                      } else {
                        console.log(
                          `✅ Updated game ${storedGame.game_id} with winner ${winnerName} (ID: ${winnerId})`
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

updateDatabase();
  // axios.get(url)
  //   .then((response) => {
  //     const games = response.data.events.map((game) => {
  //       return {
  //         gameId: game.id,
  //         teams: game.competitions[0].competitors.map((team) => ({
  //           name: team.team.displayName,
  //           score: team.score,
  //           seed: team.curatedRank ? team.curatedRank.current : null, // Extract seed
  //           winner: team.winner, // true if this team won
  //         })),
  //         status: game.status.type.description, // "Final", "In Progress", "Scheduled"
  //       };
  //     });
  
  //     console.log("✅ Games:", JSON.stringify(games, null, 2));
  //   })
  //   .catch((error) => {
  //     console.error("❌ Error fetching data:", error.message);
  //   });



    // const url = "https://site.api.espn.com/apis/site/v2/sports/basketball/womens-college-basketball/scoreboard?groups=50&dates=20250319";
  
    // axios.get(url)
    //   .then((response) => {
    //     const games = response.data.events.map((game) => {
    //       return {
    //         gameId: game.id,
    //         teams: game.competitions[0].competitors.map((team) => ({
    //           name: team.team.displayName,
    //           score: team.score,
    //           seed: team.curatedRank ? team.curatedRank.current : null, // Extract seed
    //           winner: team.winner, // true if this team won
    //         })),
    //         status: game.status.type.description, // "Final", "In Progress", "Scheduled"
    //       };
    //     });
    
    //     console.log("✅ Games:", JSON.stringify(games, null, 2));
    //   })
    //   .catch((error) => {
    //     console.error("❌ Error fetching data:", error.message);
    //   });