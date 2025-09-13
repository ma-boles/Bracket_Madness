import { NextResponse } from "next/server";
import { searchUsers } from "@/src/lib/search";

export async function GET(req) {

    const { searchParams } = new URL(req.url);
    const q = searchParams.get('q');

    if(!q || q.trim().length < 2) {
        return NextResponse.json({ error: 'Query too short' }, { status: 400 });
    }

    try {
        const rows = await searchUsers(q);
        return NextResponse.json(rows);
    } catch (error) {
        console.error('Search error:', error);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}
