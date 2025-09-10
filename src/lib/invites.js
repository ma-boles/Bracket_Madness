import { isDemo } from "@/config";
import { pool } from "@/src/db/db"

export async function getInvites (userId) {
    if(isDemo()) {
        const { mockPool_Memberships } = require("@/mock-data/mockPool_Memberships");
        const { mockUsers } = require("@/mock-data/mockUsers");
        const { mockPools } = require("@/mock-data/mockPools");

        const joinedPoolMembership = mockPool_Memberships.map(pm => {
            const pool = mockPools.find(p => p.id === pm.pool_id );
            const user = mockUsers.find(u => u.id === pool.created_by);

            return {
                pool_id: pm?.pool_id ?? null,
                status: pm?.status ?? null,
                username: user?.username ?? null,
                pool_name: pool?.pool_name,
            };
        });
        
        return joinedPoolMembership;
    }

     const [rows] = await pool.execute(
        `SELECT
            pm.pool_id,
            pm.status,
            u.username AS inviter_name,
            p.pool_name
        FROM pool_membership pm
        JOIN pools p ON p.id = pm.pool_id
        JOIN users u ON u.id = p.created_by
        WHERE pm.user_id = ? AND pm.status = 'pending'`,
        [userId]
    );

        return rows;

}