import { NextResponse } from 'next/server';
import { verifyToken } from '@/src/lib/auth';
import { pool } from '@/src/db/db';

export async function GET(req, { params }) {
  const { bracketId } = params;

  try {
    const token = req.cookies.get('token')?.value;
    const decodedUser = verifyToken(token);

    if(!decodedUser) {
      return NextResponse.json({ message: 'Unauthorized'}, { status: 401 });
    }

    const userId = decoded.userId;

    const [rows] = await pool.execute(
      `SELECT 
        round, 
        awarded_points AS round_points 
      FROM points 
      WHERE user_id = ? AND bracket_id = ?`,
      [userId, bracketId]
    );

    return NextResponse.json(rows);
  } catch (error) {
    console.error('Error fetching round points:', error);
    return NextResponse.json({ error: 'Failed to fetch round points' }, { status: 500 });
  } 
}