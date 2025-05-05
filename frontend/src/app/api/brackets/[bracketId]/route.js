import { connectionToDatabase } from "@/db/db";
import { NextResponse } from 'next/server';
import { verifyToken } from "@/lib/auth";

export async function GET(req, { params }) {
  const { bracketId } = params;
  const db = connectionToDatabase();

  try {
    const token = req.cookies.get('token')?.value;
    const decodedUser = verifyToken(token);

    if(!decodedUser) {
      return NextResponse.json({ message: 'Unauthorized'}, { status: 401 });
    }

    const userId = decoded.userId;
    console.log(`Fetching points for userId: ${userId}, bracketId: ${bracketId}`);

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

    console.log('Points fetched:', rows);
    return NextResponse.json(rows);
  } catch (error) {
    console.error('Error fetching round points:', error);
    return NextResponse.json({ error: 'Failed to fetch round points' }, { status: 500 });
  } finally {
    if(db) await db.end?.();
  }
}