import { connectionToDatabase } from "@/db/db";
import { NextResponse } from 'next/server';
import { verifyToken } from "@/lib/auth";

export async function GET(req) {
  let db;

  try {
    console.log('Incoming GET request to /api/brackets');

    db = await connectionToDatabase();
    console.log('✅ Database connection established');

    const token = req.cookies.get('token')?.value;
    console.log('🔑 Token retrieved:', token ? '[REDACTED]' : 'None');

    const decodedUser = verifyToken(token);

    if(!decodedUser) {
      console.warn('⛔ Invalid or missing token — unauthorized access attempt');

      return NextResponse.json({ message: 'Unauthorized'}, { status: 401 });
    }

    const userId = decodedUser.userId;
    console.log(`👤 Decoded user ID: ${userId}`);


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

    console.log('📦 Brackets fetched from DB:', rows);

    return NextResponse.json(rows);
  } catch (error) {
    console.error('GET /api/brackets error:', error);
    return NextResponse.json({ error: 'Failed to fetch brackets data' }, { status: 500 });
  } finally {
    if (db) await db.end?.();
    console.log('🔚 Database connection closed');

  }
}