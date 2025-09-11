import { isDemo } from "@/config";

async function getPool_Membership () {
    if(isDemo()) {
        const { mockPool_Membership } = require("@/mock-data/mockPool_Memberships");
        return mockPool_Membership;
    }

      throw new Error('getPool_Membership() should not be called outside of demo mode');

}

module.exports = { getPool_Membership }