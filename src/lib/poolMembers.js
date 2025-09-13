import { isDemo } from "@/config";
import { pool } from "@/src/db/db";

export async function getPoolMembers (poolId) {
    if(isDemo()) {
        if (!poolId) {
            console.warn("poolId is undefined in DEMO mode helper");
            return [];
            }

        const { mockPool_Memberships } = require("@/mock-data/mockPool_Memberships");
        const { mockUsers } = require("@/mock-data/mockUsers");

        const joinedMembers = mockPool_Memberships
        .filter(pm => pm.pool_id === Number(poolId))
        .map(pm => {
            const user = mockUsers.find(u => u.id === pm.user_id);
        
            return {
                user_id: pm?.user_id,
                status: pm?.status,
                username: user?.username,
            };
        })

        return joinedMembers;
    };

        const [rows] = await pool.execute(
            `SELECT
                pm.user_id,
                pm.status,
                u.username
            FROM pool_membership pm
            JOIN users u ON u.id = pm.user_id
            WHERE pool_id = ?`,
            [poolId]
        );

        return rows;
         
    };