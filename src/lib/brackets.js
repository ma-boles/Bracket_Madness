import { isDemo } from "@/config";

async function getBrackets () {
    if(isDemo()) {
        const { mockBrackets } = require("@/mock-data/mockBrackets");
        return mockBrackets;
    }

      throw new Error('getBrackets() should not be called outside of demo mode');

}

module.exports = { getBrackets }