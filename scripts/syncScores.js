// Utility script for running the scoresController manually.
// This can be used to sync live or past game scores.
// Not active in demo mode.
// -----------------------------------------------------

import dotenv from "dotenv";
const {runScoresSync} = require('../controllers/scoresController');

dotenv.config();

// runScoresSync( 'live', true ); //Sync live scores

// runScoresSync( 'past', false ); // Sync past scores

// Default async runner:
// (async () => {
//     try {
//         await runScoresSync();
//         console.log('Scoring completed.') ;
//     } catch(error) {
//         console.error('Error running scoresController:', error);
//     }
// })();