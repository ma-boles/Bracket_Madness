import { connectionToDatabase } from "@/db/db";
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  const { userId, bracketId } = params;
  const db = connectionToDatabase();

  try {
    const [rows] = await db.execute(
      `
      SELECT 
        round, 
        awarded_points AS round_points 
      FROM points 
      WHERE user_id = ? AND bracket_id = ?
      `,
      [userId, bracketId]
    );

    return NextResponse.json(rows);
  } catch (error) {
    console.error('Error fetching round points:', error);
    return NextResponse.json({ error: 'Failed to fetch round points' }, { status: 500 });
  }
}