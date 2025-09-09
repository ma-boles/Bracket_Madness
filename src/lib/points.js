import { isDemo } from "@/config";

async function getPoints () {
    if(isDemo()) {
        const { mockPoints } = require("@/mock-data/mockPoints");
        return mockPoints;
    }

      throw new Error('getPoints() should not be called outside of demo mode');

}

module.exports = { getPoints }