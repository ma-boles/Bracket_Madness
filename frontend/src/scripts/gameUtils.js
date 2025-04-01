const connection = require("../db/db");

  // Fetch stored matchups from db
  const getStoredGames = () => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT
              r.game_id,
              t1.team_name AS team_a_name,
              t2.team_name AS team_b_name
          FROM results r
          JOIN teams t1 ON r.team_a_id = t1.team_id
          JOIN teams t2 ON r.team_b_id = t2.team_id`,
          (err, results) => {
            if(err) {
              reject(err);
            } else {
              resolve(results);
            }
          }
      );
    });
  };

  module.exports = { getStoredGames };