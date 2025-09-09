import { isDemo } from "@/config";
import { pool } from "@/src/db/db"

async function getBrackets () {
    if(isDemo()) {
        const { mockBrackets } = require("@/mock-data/mockBrackets");
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

        return rows;
}

module.exports = { getBrackets }