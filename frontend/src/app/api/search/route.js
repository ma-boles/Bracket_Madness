import { connectionToDatabase } from "@/db/db";
import { NextResponse } from "next/server";

export async function GET(req) {
    let db = await connectionToDatabase();

    const { searchParams } = new URL(req.url);
    const q= searchParams.get('q');

    if(!q || q.trim().length < 2) {
        return NextResponse.json({ error: 'Query too short' }, { status: 400 });
    }

    try {
        const [rows] = await db.execute(
            `SELECT username
            FROM users
            WHERE username LIKE ? ORDER BY username ASC LIMIT 10`,
            [`${q}%`]
        );
        return NextResponse.json(rows);
    } catch (error) {
        console.error('Search error:', error);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}
