import { NextResponse } from 'next/server';
import { verifyToken } from "@/lib/auth";
import { pool } from "@/db/db";

export async function GET(req) {
  try {
    console.log('Incoming GET request to /api/brackets');

    const token = req.cookies.get('token')?.value;
    console.log('🔑 Token retrieved:', token ? '[REDACTED]' : 'None');

    const decodedUser = verifyToken(token);

    if(!decodedUser) {
      console.warn('⛔ Invalid or missing token — unauthorized access attempt');

      return NextResponse.json({ message: 'Unauthorized'}, { status: 401 });
    }

    const userId = decodedUser.userId;
    console.log(`👤 Decoded user ID: ${userId}`);


    const [rows] = await pool.execute(
      `SELECT 
        id AS bracket_id,
        bracket_name,
        total_points,
        first_four_points,
        first_round_points,
        second_round_points,
        sweet16_points,
        elite8_points,
        final4_points,
        championship_points,
        \`rank\`, 
        correct_predictions,
        total_predictions,
        accuracy_percentage
      FROM brackets 
      WHERE user_id = ?`,
      [userId]
    );

    console.log('📦 Brackets fetched from DB:', rows);

    return NextResponse.json(rows);
  } catch (error) {
    console.error('GET /api/brackets error:', error);
    return NextResponse.json({ error: 'Failed to fetch brackets data' }, { status: 500 });
   } 
}