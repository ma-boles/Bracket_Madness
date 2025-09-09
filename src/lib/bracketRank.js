import { isDemo } from "@/config";
import { mockBrackets } from "@/mock-data/mockBrackets";
import { pool } from "../db/db";

export async function getBracketRank () {
    if(isDemo()) {
        return mockBrackets;
    }

    const [rows] = await pool.execute(
            `SELECT 
              id,
              bracket_name, 
              total_points AS points
            FROM brackets
            ORDER BY points DESC
            LIMIT 3`
        );

        return rows
}