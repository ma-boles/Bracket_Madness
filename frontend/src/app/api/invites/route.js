import { connectionToDatabase } from "@/db/db";
import { NextResponse } from 'next/server';
import { verifyToken } from "@/lib/auth";

export async function GET(req) {
  try {
    const db = await connectionToDatabase();
    const token = req.cookies.get("token")?.value;
    const decoded = verifyToken(token);
    if (!decoded) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

    const userId = decoded.userId;

    const [rows] = await db.execute(
        `SELECT
            pm.pool_id,
            pm.status,
            u.username AS inviter_name,
            p.pool_name
        FROM pool_membership pm
        JOIN pools p ON p.id = pm.pool_id
        JOIN users u ON u.id = p.created_by
        WHERE pm.user_id = ? AND pm.status = 'pending'`,
        [userId]);

        return NextResponse.json({ invites: rows }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}