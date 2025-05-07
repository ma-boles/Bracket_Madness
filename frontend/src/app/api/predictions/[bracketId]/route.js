import { connectionToDatabase } from "@/db/db";
import { NextResponse } from 'next/server';

export async function GET(req, context) {
    let db;
    const { bracketId } = await context.params;

    try {
        console.log(`Incoming GET request to /api/brackets/display for ID: ${bracketId}`);

        db = await connectionToDatabase();
        console.log('Database connection established.');

        const [rows] = await db.execute(
            `
            SELECT 
              t.region,
              r.round,
              p.bracket_id,
              p.game_id,
              t.seed,
              t.team_name,
              p.winner_id
            FROM predictions p
            JOIN teams t ON t.team_id = p.winner_id
            JOIN results r ON r.game_id = p.game_id
            WHERE p.bracket_id = ?
            `,
            [bracketId]
        );

        console.log('Predictions fetched from DB:', rows);
        return NextResponse.json(rows);
    } catch(error) {
        console.error('Error fetching predictions:', error)
        return NextResponse.json({ error: 'Failed to fetch predictions'}, { status: 500 });
    } finally {
        if(db) {
            await db.end?.();
            console.log('Database connection closed.');
        }
    }
}