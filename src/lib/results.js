import { isDemo } from "@/config";

async function getResults () {
    if(isDemo()) {
        const { mockResults } = require("@/mock-data/mockResults");
        return mockResults;
    }

      throw new Error('getResults() should not be called outside of demo mode');

}

module.exports = { getResults }