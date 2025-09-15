import { NextResponse } from 'next/server';
import { verifyToken } from '@/src/lib/auth';
import { pool } from '@/src/db/db';


export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const poolId = searchParams.get('pool_id');
    const token = req.cookies.get('token')?.value;
    const decodedUser = verifyToken(token);

    if(!decodedUser) {
      console.warn('⛔ Invalid or missing token — unauthorized access attempt');
      return NextResponse.json({ message: 'Unauthorized'}, { status: 401 });
    }

    const userId = decodedUser.userId;

    const [rows] = await pool.execute(
        `SELECT bracket_id
            FROM pool_membership
            WHERE pool_id = ? AND user_id = ?`,
            [poolId, userId]
    );

    if(rows.length === 0) {
        return NextResponse.json({ ok: false, message: 'Not a member of this pool'}, { status: 401 });
    }

    const membership = rows[0];


    if(membership.bracket_id) {
        return NextResponse.json({ ok: false, message: 'Bracket already submitted' }, {status: 403 });
    }

    return NextResponse.json({ ok: true})
    } catch (error) {
        console.error('Error in GET /pool-memship/validate:', error);
        return NextResponse.json({ ok: false, message: 'Internal server error'}, { status: 500 });
    }
}