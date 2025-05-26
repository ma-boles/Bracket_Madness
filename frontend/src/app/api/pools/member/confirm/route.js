import { connectionToDatabase } from "@/db/db";
import { NextResponse } from 'next/server';
import { verifyToken } from "@/lib/auth";

export async function POST(req) {
  let db;

  try {
    db = await connectionToDatabase();

    const token = req.cookies.get('token')?.value;
    const decodedUser = verifyToken(token);

    if(!decodedUser) {
      return NextResponse.json({ message: 'Unauthorized'}, { status: 401 });
    }

    const { poolId, targetUserId } = await req.json();

    if(!poolId) {
        return NextResponse.json({ message: "Missing pool ID" }, { status: 400 });
    }

    const actingUserId = decodedUser.userId;
    const isSelf = !targetUserId;
    const userToCofirm = isSelf? actingUserId : targetUserId; 

    if(!isSelf) {
      const [rows] = await db.execute(
        `SELECT role 
        FROM pool_membership
        WHERE user_id = ? AND pool_id ?`,
        [actingUserId, poolId]
      );

      if(!rows.length || rows[0].role !== 'admin') {
        return NextResponse.json({ message: "Forbidden: Only admins can confirm membership."}, { status: 401 });
      }
    }

    // Update membership status
    const [result] = await db.execute(
        `UPDATE pool_membership
        SET status = 'active'
        WHERE user_id = ? AND pool_id =? AND status = 'pending'`,
        [userToCofirm, poolId]
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