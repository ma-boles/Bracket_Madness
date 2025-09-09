import { isDemo } from "@/config";
import { pool } from "@/src/db/db"

async function getResults () {
    if(isDemo()) {
        const { mockResults } = require("@/mock-data/mockResults");
        return mockResults;
    }

    const [rows] = await pool.execute(
            `SELECT 
              t.region,
              r.round,
              r.game_id,
              t.seed,
              t.team_name,
              r.winner_id
            FROM results r
            JOIN teams t ON t.team_id = r.winner_id`
        );

        return rows;

}

module.exports = { getResults }