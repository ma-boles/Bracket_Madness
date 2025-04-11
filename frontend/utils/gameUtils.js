const fetchPastScores = require('../scripts/fetchPastScores');
const { connectionToDatabase } = require('../src/db/db');

// Fetch stored matchups from db
  // const getStoredGames = () => {
  //   return new Promise((resolve, reject) => {
  //     connection.query(
  //       `SELECT
  //             r.game_id,
  //             t1.team_name AS team_a_name,
  //             t2.team_name AS team_b_name
  //         FROM results r
  //         JOIN teams t1 ON r.team_a_id = t1.team_id
  //         JOIN teams t2 ON r.team_b_id = t2.team_id`,
  //         (err, results) => {
  //           if(err) {
  //             reject(err);
  //           } else {
  //             resolve(results);
  //           }
  //         }
  //     );
  //   });
  // };

  const getStoredGames = async () => {
    try {
      const db = await connectionToDatabase();

      const [results] = await db.execute(
        `SELECT
          r.game_id,
          r.team_a_id,
          t1.team_name AS team_a_name,
          r.team_b_id,
          t2.team_name AS team_b_name
         FROM results r
         JOIN teams t1 ON r.team_a_id = t1.team_id
         JOIN teams t2 ON r.team_b_id = t2.team_id`
      );

      await db.end();
      return results; // Array of results returned from the query
    } catch(error) {
      console.error('Error fetching stored game:', error);
      throw error;
    }
  };

 // A simple function that returns true if the Levenshtein distance is below a certain threshold
const matchTeams = (team1, team2, threshold = 3) => {
  const a = team1.toLowerCase();
  const b = team2.toLowerCase();
  
  // Word/stubstring inclusion first
  if(b.includes(a) || a.includes(b)) 
    return true;

  const wordsA = a.split(/\s+/);
  const wordsB = b.split(/\s+/);
  const common = wordsA.filter(word => wordsB.includes(word));
  if(common.length > 0) 
    return true;

  // Fall back to Levenshtein
  const levDistance = levenshteinDistance(team1, team2);
  return levDistance <= threshold;
};

  const levenshteinDistance = (a, b) => {
    const matrix = Array.from({ length: a.length + 1 }, (_, i) => Array(b.length + 1).fill(i));
  
    for (let j = 1; j <= b.length; j++) {
      matrix[0][j] = j;
    }
  
    for (let i = 1; i <= a.length; i++) {
      for (let j = 1; j <= b.length; j++) {
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1, // Deletion
          matrix[i][j - 1] + 1, // Insertion
          matrix[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1) // Substitution
        );
      }
    }
  
    return matrix[a.length][b.length];
  };
  
  // This function will handle the matching
  const findBestMatch = (dbTeamName, espnTeams) => {
    let bestMatch = null;
    let lowestDistance = Infinity;
  
    for (const espnTeam of espnTeams) {
      const distance = levenshteinDistance(dbTeamName.toLowerCase(), espnTeam.name.toLowerCase());
  
      // Allows up to 2 edits
      if (distance < lowestDistance && distance < 3) {
        lowestDistance = distance;
        bestMatch = espnTeam;
      }
    }
  
    return bestMatch;
  };
  
    // Example usage:
    // const storedGames = [
    //   { team_a_name: 'Michigan', team_b_name: 'Indiana' }, // Example data from DB
    //   { team_a_name: 'Duke', team_b_name: 'North Carolina' },
    //   { team_a_name: 'Fair Dickson', team_b_name: 'Stanford' },
    //   { team_a_name: 'Michighan State', team_b_name: 'South Florida' },
    // ];
    
// const espnGames = [
//   { 
//     teams: [
//       { name: 'Michigan State' }, 
//       { name: 'Indiana University' }
//     ] 
//   },
//   { 
//     teams: [
//       { name: 'Duke Blue Devils' }, 
//       { name: 'North Carolina Tar Heels' }
//     ] 
//   },
//   { 
//     teams: [
//       { name: 'Michigan' }, 
//       { name: 'Indiana' }
//     ] 
//   },
//   { 
//     teams: [
//       { name: 'Fairly Dickson' }, 
//       { name: 'Stanford' }
//     ] 
//   },
//   { 
//     teams: [
//       { name: 'South Carolina' }, 
//       { name: 'University of South Florida' }
//     ] 
//   },
// ];

// Now check if teams match between stored games and ESPN games using Levenshtein distance
const matchStoredGamesWithEspn = (storedGames, espnGames) => {
  storedGames.forEach((storedGame) => {
    const matchingEspnGame = espnGames.find((game) => {
      const teamNames = game.teams.map((t) => t.name);

      // Compare team names using the Levenshtein function from gameUtils
      const team1Matches = teamNames.some(name => matchTeams(name, storedGame.team_a_name));
      const team2Matches = teamNames.some(name => matchTeams(name, storedGame.team_b_name));

      return team1Matches && team2Matches;
    });

    // If a matching ESPN game is found, update the DB
    if (matchingEspnGame) {
      console.log(`Found a match for game ${storedGame.team_a_name} vs ${storedGame.team_b_name}`);

      // Find matching ESPN teams individually
      const teamA = matchingEspnGame.teams.find(t => matchTeams(t.name, storedGame.team_a_name));
      const teamB = matchingEspnGame.teams.find(t => matchTeams(t.name, storedGame.team_b_name));

      // Fallback: Use ESPN name if no match found
      const cleanTeamAName = teamA ? storedGame.team_a_name : matchingEspnGame.teams[0].name;
      const cleanTeamBName = teamB ? storedGame.team_b_name : matchingEspnGame.teams[1].name;

      // console.log('Full matching ESPN game object:', matchingEspnGame);

      console.log(`ESPN Game ID: ${matchingEspnGame.espnGameId}`);
      console.log(`${teamA.name}: ${teamA.score} - ${teamB.name}: ${teamB.score}`);
      console.log(`Winner: ${teamA.winner ? teamA.name : teamB.name}`);

      console.log('Saving game info:', {
        espn_game_id: matchingEspnGame.espnGameId,
        team_a_id: storedGame.team_a_id,
        teamA: cleanTeamAName,
        team_a_score: teamA ? teamA.score : null,
        team_b_id: storedGame.team_b_id,
        teamB: cleanTeamBName,
        team_b_score: teamB ? teamB.score : null,
        winner_id: (teamA && teamA.winner) ? storedGame.team_a_id : storedGame.team_b_id,
        winner: (teamA && teamA.winner) ? cleanTeamAName : cleanTeamBName,
      });
      
      // Proceed with updating the DB
      // updateDatabase(storedGame.game_id, matchingEspnGame);
      } else {
        console.log(`No match found for game ${storedGame.team_a_name} vs ${storedGame.team_b_name}`);
      }
    })
  };


  // const getMatchedResults = async () => {
  //   const games = await fetchPastScores();
  //   const storedGames = await getStoredGames();

  //   const matchResults = [];

  //   for(const game of games) {
  //     const foundMatch = matchTeams(game, storedGames);

  //     if(foundMatch) {
  //       const teamA = game.teams[0];
  //       const teamB = game.teams[1];

  //       matchResults.push({
  //         team_a_name: teamA.name,
  //         team_a_score: teamA.score,
  //         team_b_name: teamB.name,
  //         team_b_score: teamB.score,
  //         winner: teamA.winner ? teamA.name : teamB.name,
  //       });
  //     }
  //   }
  //   return matchResults;
  // }
module.exports = { findBestMatch, getStoredGames, matchStoredGamesWithEspn/*, getMatchedResults */};
