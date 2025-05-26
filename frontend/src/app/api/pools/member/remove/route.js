import { connectionToDatabase } from "@/db/db";
import { NextResponse } from 'next/server';
import { verifyToken } from "@/lib/auth";


export async function DELETE(req) {
  let db;

  try {
    db = await connectionToDatabase();

    const token = req.cookies.get('token')?.value;
    console.log('🔑 Token retrieved:', token ? '[REDACTED]' : 'None');

    const decodedUser = verifyToken(token);

    if(!decodedUser) {
      console.warn('⛔ Invalid or missing token — unauthorized access attempt');

      return NextResponse.json({ message: 'Unauthorized'}, { status: 401 });
    }

    const { userId, poolId } = await req.json();

    if(decodedUser.userId !== userId) {
        return NextResponse.json({ message: "Forbidden" }, { status: 403 });
        };

    const [result] = await db.execute(
        `DELETE FROM pool_membership
        WHERE user_id = ? AND pool_id = ?`,
        [userId, poolId]
    );

    await db.end();

    if(result.affectedRows === 0) {
        return NextResponse.json({ message: "No matching member found"}, { status: 404 });
    } 

    return NextResponse.json({ message: "Member removed successfully."});

    } catch(error) {
        console.error("Error in DELETE /api/pools/member/remove:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    }
}