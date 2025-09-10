import { isDemo } from "@/config";
import { pool } from "@/src/db/db"

export async function getResults () {
    if(isDemo()) {
        const { mockResults } = require("@/mock-data/mockResults");
        const { mockTeams } = require("@/mock-data/mockTeams");

        const joinedResults = mockResults.map(result => {
            const team = mockTeams.find(t => t.team_id === result.winner_id );

            return {
                region: team?.region ?? null,
                seed: team?.seed ?? null,
                team_name: team?.team_name ?? null,
                round: result.round,
                game_id: result.game_id,
                winner_id: result.winner_id,

            };
        });
        
        return joinedResults;
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