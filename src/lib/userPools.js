import { isDemo } from "@/config";
import { pool } from "@/src/db/db";

export async function getUserPools () {
    if(isDemo()) {
        const { mockPools } = require("@/mock-data/mockPools");
        const { mockPoolMemberships } = require("@/mock-data/mockPool_Membership");
        
        const joinedPools = mockPools.map(p => {
            const poolMembership = mockPoolMemberships.find(pm => pm.pool_id === p.id);
        
            return {
                pool_name: pool?.pool_name,
                status: poolMembership?.status,
                bracket_submitted: poolMembership?.bracket_submitted,
            };
        });

        return joinedPools;
         
    }
        // Fetch all pools joined by this user
        const [rows] = await pool.execute(
                `SELECT p.id,
                    p.pool_name,
                    pm.status,
                    pm.bracket_submitted
                FROM pools p
                JOIN pool_membership pm ON p.id = pm.pool_id
                WHERE user_id = ?`,
                [userId]
            );

            return rows;
}