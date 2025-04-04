const runScoresSync = require('../controllers/scoresController');

// Live scores
runScoresSync({ mode: 'live' });

// Past scores
runScoresSync({ mode: 'past' });