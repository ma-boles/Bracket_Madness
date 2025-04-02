// const connection = require("../src/db/db");

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

    const levenshteinDistance = (a, b) => {
      const matrix = Array.from({ length: a.length + 1 }, (_, i) => Array(b.length + 1).fill(i));
    
      for(let j = 1; j <= b.length; j++) {
        matrix[0][j] = j;
      }

      for(let i = 1; i <= a.length; i++) {
        for(let j = 1; j <= b.length; j++) {
          matrix[i][j] = Math.min(
            matrix[i - 1][j] + 1, //Deletion
            matrix[i][j - 1] + 1, // Insertion
            matrix[i - 1][j - 1] + (a[i - 1] === b[j - 1]? 0 : 1) // Substitution
          );
        }
      }

      return matrix[a.length][b.length];
  };

  // Funtion to handle matching
  const findBestMatch = (dbTeamName, espnTeams, threshold = 3) => {
    let bestMatch = null;
    let lowestDistance = Infinity;

    // for(const espnGame of espnGames) {
    // for(const espnTeam of espnGame.teams) {
    for(const espnGame of espnTeams) {
      for(const espnTeam of espnGame.teams) {
      // for(const espnTeam of espnTeams) {
        if(!espnTeam || !espnTeam.name) continue;

      const dbLower = dbTeamName.toLowerCase();
      const espnLower = espnTeam.name.toLowerCase();

      // const words = espnLower.split(/\s+/);
      // if(words.includes(dbLower)) {
      //   console.log(`Exact word match found: ${dbTeamName} -> ${espnTeam.name} `);
      //   return espnTeam
      
      // if(words.includes(dbLower) || dbLower.split(" ").some(word => words.includes(word))) {
      //   console.log(`Partial match found: ${dbTeamName} -> ${espnTeam.name}`);
      //   return espnTeam;
      // }

      // if(espnLower.includes(dbLower)) {
      //   console.log(`Full name match found ${dbTeamName} -> ${espnTeam.name}`);
      //   return espnTeam;
      // }

      const distance = levenshteinDistance(dbLower, espnLower);
      console.log(`Checking ${dbTeamName} vs ${espnTeam.name}`)
    
      // Allows up to 2 edits
      if(distance < lowestDistance && distance < threshold) {
        lowestDistance = distance;
        bestMatch = espnTeam;
      }
  }
}

  return bestMatch;

    // if(bestMatch) {
    //   if(
    //     bestMatch.name.toLowerCase().includes("state") !== dbTeamName.toLowerCase().includes("state")
    //   ) {
    //     console.log(`Prevented mix-up: ${dbTeamName} should not match ${bestMatch.name}`);
    //     return null;
    //   }
    //   console.log(`Best match for ${dbTeamName} -> ${bestMatch.name}`);
    //   return bestMatch;
    // }
    // console.log(`No match found for ${dbTeamName}`);
    // return null;

    // return bestMatch ? bestMatch : null;
  };

  const createLookupTable = (espnGames) => {
    const lookupTable = new Map();

    espnGames.forEach(game => {
      const teamNames = game.teams.map(team => team.name.toLowerCase());
      lookupTable.set(game.espnGameId, teamNames);
    });
    return lookupTable;
  }

  const matchGamesWithLookup = (storedGames, espnGames) => {
    const lookupTable = createLookupTable(espnGames);

    storedGames.forEach(storedGame => {
      const teamA = findBestMatch(storedGame.team_a_name, espnGames);
      const teamB = findBestMatch(storedGame.team_b_name, espnGames);
    
      if(teamA && teamB) {
        const match1 = [teamA.name.toLowerCase(), teamB.name.toLowerCase()];
        const match2 = [teamB.name.toLowerCase(), teamA.name.toLowerCase()];

        const matchedGame = [...lookupTable.values()].find(matchup =>
          JSON.stringify(matchup) === JSON.stringify(match1) || JSON.stringify(matchup) === JSON.stringify(match2)
        );

        if(matchedGame) {
          console.group(`New match found for ${storedGame.team_a_name} and ${storedGame.team_b_name}`);
          // update DB
        } else {
          console.log(`No new match found for ${storedGame.team_a_name} and ${storedGame.team_b_name}`);
        }
      } else {
        console.log(`No match found for ${storedGame.team_a_name} and ${storedGame.team_b_name}`);
      }
    });
  };
    // module.exports = { getStoredGames, findBestMatch };

  // Function to match games using lookup table
  // const matchGames = (storedGames, espnGames) => {
  //   const espnGameLookup = new Map();

  //   espnGames.forEach((espnGame) => {
  //     const teamNames = espnGame.teams.map((team) => team.name.toLowerCase());
  //     const gameKey = teamNames.sort().join(" vs ").toLowerCase();
  //     espnGameLookup.set(gameKey, espnGame);
  //   });

  //   storedGames.forEach((storedGame) => {
  //     const teamA = storedGame.team_a_name.toLowerCase().trim();
  //     const teamB = storedGame.team_b_name.toLowerCase().trim();

  //     const gameKey1 = [teamA, teamB].sort().join(" vs ");
  //     const gameKey2 = [teamB, teamA].sort().join(" vs ");

  //     let matchedGame = espnGameLookup.get(gameKey1) || espnGameLookup.get(gameKey2);
    
  //     if(matchedGame) {
  //       console.log(`Found matching game ${storedGame.team_a_name} vs ${storedGame.team_b_name}`);
  //       // update db here
  //     } else {
  //       console.log(`No match found for: ${storedGame.team_a_name} vs ${storedGame.team_b_name}`);
  //     }
  //   });
  // };


    // Example usage:
const storedGames = [
  { team_a_name: 'Michigan', team_b_name: 'Indiana' }, // Example data from DB
  { team_a_name: 'Duke', team_b_name: 'North Carolina' },
];

const espnGames = [
  { 
    teams: [
      { name: 'Michigan State' }, 
      { name: 'Indiana University' }
    ] 
  },
  { 
    teams: [
      { name: 'Duke Blue Devils' }, 
      { name: 'North Carolina Tar Heels' }
    ] 
  },
  { 
    teams: [
      { name: 'Michigan' }, 
      { name: 'Indiana' }
    ] 
  },
];

matchGamesWithLookup(storedGames, espnGames);

storedGames.forEach(storedGame => {
  const teamA = findBestMatch(storedGame.team_a_name, espnGames);
  const teamB = findBestMatch(storedGame.team_b_name, espnGames);

  if (teamA && teamB) {
    console.log(`New Match found for ${storedGame.team_a_name} and ${storedGame.team_b_name}`);
    // Proceed to update the database with the matched teams.
  } else {
    console.log(`No new match found for ${storedGame.team_a_name} and ${storedGame.team_b_name}`);
  }
});