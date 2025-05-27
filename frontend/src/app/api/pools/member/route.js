import { connectionToDatabase } from "@/db/db";
import { NextResponse } from 'next/server';
import { verifyToken } from "@/lib/auth";

export async function GET(req) {
  let db;

  try {
    console.log('Incoming GET request to /api/pools/member');

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
   
    // Fetch all pools created by this user
    const [rows] = await db.execute(
        `SELECT p.id,
            p.pool_name,
            pm.status
        FROM pools p
        JOIN pool_membership pm ON p.id = pm.pool_id
        WHERE user_id = ?`,
        [userId]
    );

    console.log(`Fetched ${rows.length} pools`);

    return NextResponse.json({ pools:rows }, { status: 200 });
    } catch (error) {
        console.error('Error in GET /api/pools/member:', error)
        return NextResponse.json({ message: 'Internal Server Error '}, { status: 500 });
    }
}