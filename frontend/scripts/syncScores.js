const {runScoresSync} = require('../controllers/scoresController');

// Live scores
// runScoresSync( 'live', true );

// Past scores
runScoresSync( 'past', true );