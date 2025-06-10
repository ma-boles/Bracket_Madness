const axios = require("axios");

// Function to fetch scores from ESPN API
const fetchScores = async () => {
  try {

    const url =
      "https://site.api.espn.com/apis/site/v2/sports/basketball/womens-college-basketball/scoreboard?groups=50";
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
    console.error("Error fetching data:", error.message);
  }
};

module.exports = fetchScores;