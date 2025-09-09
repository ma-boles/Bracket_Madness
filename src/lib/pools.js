import { isDemo } from "@/config";

async function getPools () {
    if(isDemo()) {
        const { mockPools } = require("@/mock-data/mockPools");
        return mockPools;
    }

      throw new Error('getPools() should not be called outside of demo mode');

}

module.exports = { getPools }