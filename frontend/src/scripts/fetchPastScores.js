const axios = require("axios");
import { getStoredGames } from "./gameUtils";
import { updateDatabase } from "./updateDatabase";


// Function to fetch scores from ESPN API
const fetchPastScores = async () => {
  try {

    const dates = ["20250312", "20250313", "20250314", "20250315", "20250316", "20250317", "20250321", "20250322", "20250323", "20250324", "20250328", "20250329", "20250330", "20250331"];
    const storedGames = await getStoredGames();

    for ( const date of dates ) {
    const url =
      `https://site.api.espn.com/apis/site/v2/sports/basketball/womens-college-basketball/scoreboard?groups=50&dates=${date}`;
    const response = await axios.get(url);

    const espnGames = response.data.events.map((game) => ({
      espnGameId: game.id,
      teams: game.competitions[0].competitors.map((team) => ({
        name: team.team.displayName,
        score: parseInt(team.score, 10),
        winner: team.winner, // true if team won
      })),
    }));

    await updateDatabase(storedGames, espnGames);

    }
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};

fetchPastScores();