import { NextResponse } from 'next/server';
import { pool } from "@/db/db";

export async function GET(req, context) {
    const { bracketId } = await context.params;

    try {
        console.log(`Incoming GET request to /api/brackets/display for ID: ${bracketId}`);

        const [rows] = await pool.execute(
            `SELECT 
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
            WHERE p.bracket_id = ?`,
            [bracketId]
        );

        // console.log('Predictions fetched from DB:', rows);
        return NextResponse.json(rows);
    } catch(error) {
        console.error('Error fetching predictions:', error)
        return NextResponse.json({ error: 'Failed to fetch predictions'}, { status: 500 });
    } 
}