require('dotenv').config();
const {runScoresSync} = require('../controllers/scoresController');

// Live scores
// runScoresSync( 'live', true );

// Past scores
runScoresSync( 'past', false );

// (async () => {
//     try {
//         await runScoresSync();
//         console.log('Scoring completed.') ;
//     } catch(error) {
//         console.error('Error running scoresController:', error);
//     }
// })();