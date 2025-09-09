import { isDemo } from "@/config";

async function getPredictions () {
    if(isDemo()) {
        const { mockPredictions } = require("@/mock-data/mockPredictions");
        return mockPredictions;
    }

      throw new Error('getPredictions() should not be called outside of demo mode');

}

module.exports = { getPredictions }