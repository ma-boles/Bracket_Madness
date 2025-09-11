import { isDemo } from "@/config";
import { pool } from "@/src/db/db";

export async function getPoolBrackets (poolId) {
    if(isDemo()) {
        if (!poolId) {
            console.warn("❌ poolId is undefined in DEMO mode helper");
            return [];
            }

        const { mockBrackets } = require("@/mock-data/mockBrackets");
        const { mockUsers } = require("@/mock-data/mockUsers");

        const joinedBrackets = mockBrackets
        .filter(b => b.pool_id === Number(poolId))
        .map(b => {
            const user = mockUsers.find(u => u.id === b.user_id);
        
            return {
                id: b?.bracket_id,
                pool_id: b?.pool_id,
                username: user?.username,
                points: b?.total_points,
                pool_rank: b?.pool_rank,
            };
        })
        .sort((a, b) => b.points - a.points);

        console.log(joinedBrackets)
        return joinedBrackets;
    };

        const [rows] = await pool.execute(
            `SELECT 
                b.id,
                u.username, 
                b.total_points AS points,
                b.pool_rank
            FROM brackets b
            JOIN users u ON u.id = b.user_id
            WHERE pool_id = ?
            ORDER BY points DESC`, 
            [poolId]
        );

        return rows;
         
    };