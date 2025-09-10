import { NextResponse } from 'next/server';
import { verifyToken } from '@/src/lib/auth';
import { pool } from '@/src/db/db';

export async function POST(req) {

  try {
    const token = req.cookies.get('token')?.value;
    const decodedUser = verifyToken(token);

    if(!decodedUser) {
      return NextResponse.json({ message: 'Unauthorized'}, { status: 401 });
    }

    const { userId, poolId } = await req.json();

    const [result] = await pool.execute(
        `INSERT into pool_membership (user_id, pool_id, status, role)
        VALUES (?, ?, 'pending', 'member')
        ON DUPLICATE KEY UPDATE status = 'pending'`,
        [userId, poolId]
    );

    return NextResponse.json({ message: 'Invite sent successfully' })
  } catch (error) {
    console.error('Error inviting user:', error);
    return NextResponse.json({ message: 'Server error'}, { status: 500 });
  }
}