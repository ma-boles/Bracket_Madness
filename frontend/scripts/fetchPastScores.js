const axios = require("axios");


// Function to fetch scores from ESPN API
const fetchPastScores = async () => {
  try {

    const dates = ["20250319", "20250320", "20250321", "20250322", "20250323", "20250324", "20250328", "20250329", "20250330", "20250331", "20250404", "20250406"];
    let allFetchedGames = [];

    
    for (const date of dates) {
      const url = `https://site.api.espn.com/apis/site/v2/sports/basketball/womens-college-basketball/scoreboard?groups=50&dates=${date}`;
      const response = await axios.get(url);

      if (!response.data.events || response.data.events.length === 0) {
        console.log(`No games found for date: ${date}`);
        continue;
      }

      // Filter games where at least one team is ranked ≤ 16
      const filteredGames = response.data.events
        .map((game) => {
          const teams = game.competitions[0].competitors.map((team) => ({
            rank: team.curatedRank ? team.curatedRank.current : null,
            name: team.team.displayName,
            score: parseInt(team.score, 10),
            winner: team.winner,
          }));

          return {
            espnGameId: game.id,
            teams: teams,
          };
        })
        .filter((game) =>
          game.teams.some((team) => team.rank !== null && team.rank <= 16)
        );

        allFetchedGames = [...allFetchedGames, ...filteredGames];
    }
    return allFetchedGames;

  } catch (error) {
    console.error("Error fetching data:", error.message);
    return[];
  }
};

module.exports = fetchPastScores;