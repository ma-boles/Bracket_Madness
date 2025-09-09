import { isDemo } from "@/config";

async function getTeams () {
    if(isDemo()) {
        const { mockTeams } = require("@/mock-data/mockTeams");
        return mockTeams;
    }

      throw new Error('getTeams() should not be called outside of demo mode');

}

module.exports = { getTeams }