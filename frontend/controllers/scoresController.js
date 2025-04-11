const { connectionToDatabase } = require("../src/db/db");
const { getStoredGames, findBestMatch, matchStoredGamesWithEspn/*, getMatchedResults*/ } = require('../utils/gameUtils');
const fetchPastScores = require('../scripts/fetchPastScores');
const fetchScores = require('../scripts/fetchScores');
const updateDatabase = require('../scripts/updateDatabase');


// async function runScoresSync(mode, dryRun) {
    // let espnGames = [];
    

    // if(mode === 'past') {
    //     espnGames = await fetchPastScores();
    // } else if (mode === 'live') {
    //     espnGames = await fetchScores();
    // } else {
    //     console.error('Invalid mode specified. Use "past" or "live".');
    //     return;
    // }

    // // Fetching stored games from DB
    // const storedGames = await getStoredGames();
    // console.log('Fetched Past Games:', espnGames.length);

    // const matches = matchStoredGamesWithEspn(storedGames, espnGames);
    // // Matching logic for games
    // // matches = getStoredGames.map((dbGame) => {
    // //     const bestMatch = findBestMatch(dbGame, espnGames);
    // //     return { dbGame, bestMatch };
    // // });
    // matches.forEach(({ storedGame, matchingEspnGame }) => {
    //     if(matchingEspnGame) {
    //         console.log(`Found a match for game ${storedGame.team_a_name} vs ${storedGame.team_b_name}`);
    //     }

    // if(dryRun) {
    //     console.log('Dry run mode: not updating DB. Maches:', matches);
    // } else {
    //     for(const match of matches) {
    //         if(match.bestMatch) {
    //             await updateDatabase(match.dbGame.id, match.bestMatch);
    //         }
    //     }
    // }
// }

async function runScoresSync(mode, dryRun) {
  const db = await connectionToDatabase();

  try {
    const espnGames = mode === 'past' ? await fetchPastScores() : await fetchScores();
    const storedGames = await getStoredGames();
  
    console.log('Fetched Past Games:', espnGames.length);
    console.log('Stored Games:', storedGames.map(g => `(ID:${g.team_a_id}) ${g.team_a_name} vs (ID:${g.team_b_id}) ${g.team_b_name}`));
    console.log('Fetched ESPN Games:', espnGames.map(g => `${g.teams.map(t => t.name).join(' vs ')}`));

    // Get matched results that include scores
    // const matchedResults = await getMatchedResults();
    
    // console.log('Matched Results:', matchedResults);

    // Use the function to match stored games with ESPN games
    const matches = matchStoredGamesWithEspn(storedGames, espnGames) || [];
  
      // Process the matches
      if(Array.isArray(matches)) {
      matches.forEach(({ storedGame, matchingEspnGame }) => {
        if (matchingEspnGame) {
          console.log(`Found a match for game ${storedGame.team_a_name} vs ${storedGame.team_b_name}`);
    
          if (!dryRun) {
            // Proceed with updating the DB
            updateDatabase(storedGame.game_id, matchingEspnGame);
          }
        } else {
          console.log(`No match found for game ${storedGame.team_a_name} vs ${storedGame.team_b_name}`);
        }
      });
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