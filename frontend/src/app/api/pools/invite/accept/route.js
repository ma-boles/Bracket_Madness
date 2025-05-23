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

    const { poolId } = await req.json();
    const userId = decodedUser.userId;

    if(!poolId) {
        return NextResponse.json({ message: "Missing pool ID" }, { status: 400 });
    }

    // Update membership status
    const [result] = await db.execute(
        `UPDATE pool_membership
        SET status = 'active'
        WHERE user_id = ? AND pool_id =? AND status = 'pending'`,
        [userId, poolId]
    );

    if(result.affectedRows === 0) {
        return NextResponse.json({ message: "Invite not found or alredy accepted"},  { status:404 });
    }

    return NextResponse.json({ message: "Invite accepted successfully."}, { status: 200 });
  } catch(error) {
    console.error("Error accepting invite:", error);
    return NextResponse.json({ message: "Internal Server Error"}, { status: 500});
  }
}