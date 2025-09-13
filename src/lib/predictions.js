import { isDemo } from "@/config";
import { pool } from "@/src/db/db"

async function getPredictions (bracketId) {
    if(isDemo()) {
        const { mockPredictions } = require("@/mock-data/mockPredictions");
        const { mockTeams} = require("@/mock-data/mockTeams");
        const { mockResults } = require("@/mock-data/mockResults");

        const joinedRows = mockPredictions
          .filter(p => p.bracket_id === Number(bracketId))
          .map (p => {
            const team = mockTeams.find(t => t.team_id === p.winner_id);
            const result = mockResults.find(r => r.game_id === p.game_id);

            return {
              region: team?.region ?? null,
              round: result?.round ?? null,
              bracket_id: p.bracket_id,
              game_id: p.game_id,
              seed: team?.seed ?? null,
              team_name: team?.team_name ?? null,
              winner_id: p.winner_id

            };
          });
          return joinedRows;
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