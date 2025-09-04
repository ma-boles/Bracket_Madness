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


    const [globalBrackets] = await pool.execute(
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
      FROM brackets b
      WHERE user_id = ? AND pool_id IS NULL`,
      [userId]
    );

    console.log('📦 Global brackets fetched from DB:', globalBrackets);

      const [poolBrackets] = await pool.execute(
      `SELECT 
        b.id AS bracket_id,
        b.bracket_name,
        b.total_points,
        b.first_four_points,
        b.first_round_points,
        b.second_round_points,
        b.sweet16_points,
        b.elite8_points,
        b.final4_points,
        b.championship_points,
        b.pool_rank,
        b.correct_predictions,
        b.total_predictions,
        b.accuracy_percentage,
        p.pool_name
      FROM brackets b
      JOIN pools p ON p.id = b.pool_id
      WHERE b.user_id = ? AND b.pool_id IS NOT NULL`,
      [userId]
    );

      console.log('📦 Pool brackets fetched from DB:', poolBrackets);

    return NextResponse.json({ globalBrackets, poolBrackets });
  } catch (error) {
    console.error('GET /api/brackets error:', error);
    return NextResponse.json({ error: 'Failed to fetch brackets data' }, { status: 500 });
   } 
}