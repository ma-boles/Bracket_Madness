import { connectionToDatabase } from "@/db/db";
import { NextResponse } from 'next/server';
import { verifyToken } from "@/lib/auth";

export async function POST(req) {
  let db;

  try {
    const token = req.cookies.get('token')?.value;
    const decodedUser = verifyToken(token);

    if(!decodedUser) {
      return NextResponse.json({ message: 'Unauthorized'}, { status: 401 });
    }

    const { userId, poolId } = await req.json();

    db = await connectionToDatabase();

    const [result] = await db.execute(
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