import { NextResponse } from 'next/server';
import { verifyToken } from '@/src/lib/auth';
import { pool } from '@/src/db/db';

export async function POST(req) {

  try {
    const token = req.cookies.get('token')?.value;
    const decodedUser = verifyToken(token);

    if(!token || !decodedUser) {
      return NextResponse.json({ message: 'Unauthorized'}, { status: 401 });
    }

    const { poolId, targetUserId } = await req.json();

    if(!poolId) {
        return NextResponse.json({ message: "Missing pool ID" }, { status: 400 });
    }

    const actingUserId = decodedUser.userId;
    const isSelf = !targetUserId;
    const userToConfirm = isSelf? actingUserId : targetUserId; 

    if(!isSelf) {
        // Allow admins and created_by to confirm other users
        const [creatorRows] = await pool.execute(
            `SELECT created_by
            FROM pools
            WHERE id = ?`,
            [poolId]
        );
        
        const isCreator = creatorRows.length && creatorRows[0].created_by === actingUserId;

        // Check if user is admin in the pool
        const [membershipRows] = await pool.execute(
            `SELECT role 
            FROM pool_membership
            WHERE user_id = ? AND pool_id = ?`,
            [actingUserId, poolId]
        );
        
        const isAdmin = membershipRows.length && membershipRows[0].role === 'admin';

        if(!isCreator && !isAdmin) {
        return NextResponse.json({ message: "Forbidden - only admins allowed to remove other users" }, { status: 403 });
    }
  }

    // Update membership status
    const [result] = await pool.execute(
        `UPDATE pool_membership
        SET status = 'active'
        WHERE user_id = ? AND pool_id =? AND status = 'pending'`,
        [userToConfirm, poolId]
    );

    if(result.affectedRows === 0) {
        return NextResponse.json({ message: "No pending invite found for this user."},  { status:404 });
    }

    return NextResponse.json({ message: isSelf ? "Invite accepted." : "Member confirmed."}, { status: 200 });
  } catch(error) {
    console.error("Error confirming membership:", error);
    return NextResponse.json({ message: "Internal Server Error"}, { status: 500});
  }
}