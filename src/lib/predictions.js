import { isDemo } from "@/config";
import { pool } from "@/src/db/db"

async function getPredictions (context) {
    const { bracketId } = await context.params;

    if(isDemo()) {
        const { mockPredictions } = require("@/mock-data/mockPredictions");
        return mockPredictions;
    }

    const [rows] = await pool.execute(
            `SELECT 
              t.region,
              r.round,
              p.bracket_id,
              p.game_id,
              t.seed,
              t.team_name,
              p.winner_id
            FROM predictions p
            JOIN teams t ON t.team_id = p.winner_id
            JOIN results r ON r.game_id = p.game_id
            WHERE p.bracket_id = ?`,
            [bracketId]
        );

        return rows;
}

module.exports = { getPredictions }