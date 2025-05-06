import { connectionToDatabase } from "@/db/db";
import { NextResponse } from 'next/server';

export async function GET(req) {
    let db;

    try {
        console.log('Incoming GET request to /api/results');

        db = await connectionToDatabase();
        console.log('Database connection established.');

        const [rows] = await db.execute(
            `
            SELECT 
              t.region,
              r.round,
              r.game_id,
              t.seed,
              t.team_name,
              r.winner_id
            FROM results r
            JOIN teams t ON t.team_id = r.winner_id
            `
        );

        console.log('Results fetched from DB:', rows);
        return NextResponse.json(rows);
    } catch(error) {
        console.error('Error fetching results:', error)
        return NextResponse.json({ error: 'Failed to fetch results'}, { status: 500 });
    } finally {
        if(db) {
            await db.end?.();
            console.log('Database connection closed.');
        }
    }
}