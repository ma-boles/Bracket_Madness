import { NextResponse } from 'next/server';
import { pool } from "@/db/db";

export async function GET(req) {

    try {
        const [rows] = await pool.execute(
            `SELECT 
              id,
              bracket_name, 
              total_points AS points
            FROM brackets
            ORDER BY points DESC
            LIMIT 3`
        );

        return NextResponse.json({ data: rows });
    } catch(error) {
        console.error('Error fetching bracket rank data:', error)
        return NextResponse.json({ error: 'Failed to fetch brackets rank data'}, { status: 500 });
    } 
}