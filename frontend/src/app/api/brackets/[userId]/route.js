import { connectionToDatabase } from "@/db/db";
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  const { userId } = params;
  const db = connectionToDatabase();

  try {
    const [rows] = await db.execute(
      `
      SELECT 
        id AS bracket_id,
        name AS bracket_name,
        total_points
      FROM brackets 
      WHERE user_id = ?
      `,
      [userId]
    );

    return NextResponse.json(rows);
  } catch (error) {
    console.error('Error fetching brackets data:', error);
    return NextResponse.json({ error: 'Failed to fetch brackets data' }, { status: 500 });
  } finally {
    await db.end?.();
  }
}