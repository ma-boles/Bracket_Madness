import { NextResponse } from 'next/server';
import { pool } from "@/db/db";

export async function GET(req) {

    try {
        const [rows] = await pool.execute(
            `SELECT 
              t.region,
              r.round,
              r.game_id,
              t.seed,
              t.team_name,
              r.winner_id
            FROM results r
            JOIN teams t ON t.team_id = r.winner_id`
        );

        // console.log('Results fetched from DB:', rows);
        return NextResponse.json(rows);
    } catch(error) {
        console.error('Error fetching results:', error)
        return NextResponse.json({ error: 'Failed to fetch results'}, { status: 500 });
    } 
}