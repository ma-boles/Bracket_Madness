const { getStoredGames, matchStoredGamesWithEspn } = require('../utils/gameUtils');
const fetchPastScores = require('../scripts/fetchPastScores');
const fetchScores = require('../scripts/fetchScores');
const updateDatabase = require('../scripts/updateDatabase');
const propogateWinners = require("../scripts/propogateWinners");
const scoring = require("../scripts/scoring");
const updateRank = require("../scripts/updateRank");
const correctPrediction = require("../scripts/correctPrediction");
const calculateAccuracy = require("../scripts/calculateAccuracy");


async function runScoresSync(mode, dryRun) {

  try {
    const espnGames = mode === 'past' ? await fetchPastScores() : await fetchScores();
    const storedGames = await getStoredGames();

    // Use the function to match stored games with ESPN games
    const matches = matchStoredGamesWithEspn(storedGames, espnGames) || [];
  
      // Process the matches
      if(Array.isArray(matches)) {
        for(const gameInfo of matches) {

        if (gameInfo) {
    
          if (!dryRun) {
            // Proceed with updating the DB + propogation
            await updateDatabase(gameInfo); // Fetch results
            await scoring();// Score the predictions
            await correctPrediction(); // Calculate correct predictions
            await calculateAccuracy(); // Calculate prediction accuracy
            await updateRank(); // Update global + pool rank
            await propogateWinners(gameInfo); // Update your progress
            }
        } else {
          console.warn(`No valid gameInfo found.`);
        }
      // });
    }
    } else {
      console.warn('No matches found or matches is not an array');
    }

  } catch(error) {
    console.error('Error running score sync:', error.message);
  } 
}

module.exports = { runScoresSync };