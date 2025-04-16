const { connectionToDatabase } = require("../src/db/db");
const { getStoredGames, matchStoredGamesWithEspn } = require('../utils/gameUtils');
const fetchPastScores = require('../scripts/fetchPastScores');
const fetchScores = require('../scripts/fetchScores');
const updateDatabase = require('../scripts/updateDatabase');
const { connection } = require("next/server");
const propogateWinners = require("../scripts/propogateWinners");


async function runScoresSync(mode, dryRun) {
  const db = await connectionToDatabase();
  console.log('Dry run inside runScoresSync:', dryRun);

  try {
    const espnGames = mode === 'past' ? await fetchPastScores() : await fetchScores();
    const storedGames = await getStoredGames();

    // Use the function to match stored games with ESPN games
    const matches = matchStoredGamesWithEspn(storedGames, espnGames) || [];
  
      // Process the matches
      if(Array.isArray(matches)) {
        for(const gameInfo of matches) {

        if (gameInfo) {
          console.log(`Found a match for game ${gameInfo.teamA} vs ${gameInfo.teamB}`);
    
          console.log('dryRun before updateDatabase call:', dryRun);

          if (!dryRun) {
            // Proceed with updating the DB + propogation
            await updateDatabase(gameInfo, connection);
            await propogateWinners(gameInfo, connection);
            }
        } else {
          console.log(`No valid gameInfo found.`);
        }
      // });
    }
    } else {
      console.log('No matches found or matches is not an array');
    }

  } catch(error) {
    console.error('Error running score sync:', error.message);
  } finally {
    await db.end();
    console.log('Database connection closed.');
  }
}

module.exports = { runScoresSync };