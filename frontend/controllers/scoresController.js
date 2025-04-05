const { getStoredGames, findBestMatch } = require('./utils/gameUtils');
const fetchPastScores = require('./scripts/fetchPastScores');
const fetchScores = require('./scripts/fetchScores');
const updateDatabase = require('./scripts/updateDatabase');

async function runScoresSync(mode = 'live', dryRun = true) {
    let espnGames = [];

    if(mode === 'past') {
        espnGames = await fetchPastScores();
    } else if (mode === 'live') {
        espnGames = await fetchScores();
    } else {
        console.error('Invalid mode specified. Use "past" or "live".');
        return;
    }

    console.log('Fetched Past Games:', espnGames.length);
    const storedGames = await getStoredGames();

    const matches = getStoredGames.map((dbGame) => {
        const bestMatch = findBestMatch(dbGame, espnGames);
        return { dbGame, bestMatch };
    });

    if(dryRun) {
        console.log('Dry run mode: not updating DB. Maches:', matches);
    } else {
        for(const match of matches) {
            if(match.bestMatch) {
                await updateDatabase(match.dbGame.id, match.bestMatch);
            }
        }
    }
}

module.exports = { runScoresSync };