  const axios = require("axios");

  const url = "https://site.api.espn.com/apis/site/v2/sports/basketball/womens-college-basketball/scoreboard?groups=50";
  
  axios.get(url)
    .then((response) => {
      const games = response.data.events.map((game) => {
        return {
          gameId: game.id,
          teams: game.competitions[0].competitors.map((team) => ({
            name: team.team.displayName,
            score: team.score,
            seed: team.curatedRank ? team.curatedRank.current : null, // Extract seed
            winner: team.winner, // true if this team won
          })),
          status: game.status.type.description, // "Final", "In Progress", "Scheduled"
        };
      });
  
      console.log("✅ Games:", JSON.stringify(games, null, 2));
    })
    .catch((error) => {
      console.error("❌ Error fetching data:", error.message);
    });