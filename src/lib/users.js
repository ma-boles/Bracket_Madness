import { isDemo } from "@/config";

async function getUsers() {
    if(isDemo()) {
        const { mockUsers } = require("@/mock-data/mockUsers");
        return mockUsers;
    }

    throw new Error('getUsers() should not be called outside of demo mode');

}

module.exports = { getUsers };