import { NextResponse } from 'next/server';
import { verifyToken } from '@/src/lib/auth';
import { pool } from '@/src/db/db';
import { isDemo } from '@/config';

export async function GET(req) {

  try {
    console.log('Incoming GET request to /api/pools/member');

    const token = req.cookies.get('token')?.value;
    console.log('🔑 Token retrieved:', token ? '[REDACTED]' : 'None');

    const decodedUser = verifyToken(token);

    if(!decodedUser) {
      console.warn('⛔ Invalid or missing token — unauthorized access attempt');

      return NextResponse.json({ message: 'Unauthorized'}, { status: 401 });
    }

    const userId = decodedUser.userId;
    console.log(`👤 Decoded user ID: ${userId}`);
   
    if(isDemo) {
      // filter some mock data?
    }

    // Fetch all pools created by this user
    const [rows] = await pool.execute(
        `SELECT p.id,
            p.pool_name,
            pm.status,
            pm.bracket_submitted
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