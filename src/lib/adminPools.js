import { isDemo } from "@/config";
import { pool } from "@/src/db/db";

export async function getAdminPools () {
    if(isDemo()) {
        const { mockPools } = require("@/mock-data/mockPools");
               
        const filteredPools = mockPools.filter(p => p.created_by === userId);
        return filteredPools.map(({ id, pool_name, code }) => ({
            id,
            pool_name,
            code,
        }));
    };

        // Fetch all pools created by this user
        const [rows] = await pool.execute(
            `SELECT id,
                pool_name,
                code
            FROM pools
            WHERE created_by = ?`,
            [userId]
        );

        return rows;
         
    };