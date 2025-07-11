import { NextResponse } from "next/server";
const { runScoresSync } = require("@/frontend/controllers/scoresController");

export async function GET(reg) {
    const authHeader = req.headers.get("authorization");
    const validSecret = process.env.CRON_SECRET;

    if(authHeader !== `Bearer ${validSecret}`) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        await runScoresSync("cron", false);
        return NextResponse.json({ message: "Scores updated" });
    } catch (error) {
        console.error("Cron sync failed:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}