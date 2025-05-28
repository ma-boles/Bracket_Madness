import { connectionToDatabase } from "@/db/db";
import { NextResponse } from 'next/server';
import { verifyToken } from "@/lib/auth";
import { cookies } from "next/headers";

export async function GET(req, context) {
  const params = await context.params;
  const poolId = params.poolId;

  try {
    const db = await connectionToDatabase();
    const cookiesStore = await cookies();
    const token = cookiesStore.get('token')?.value;
    const decodedUser = verifyToken(token);

    if(!decodedUser) {
      return NextResponse.json({ message: 'Unauthorized'}, { status: 401 });
    }



    const [rows] = await db.execute(
        `SELECT
            pm.user_id,
            pm.status,
            u.username
        FROM pool_membership pm
        JOIN users u ON u.id = pm.user_id
        WHERE pool_id = ?`,
        [poolId]
    );

    const activeMembers = [];
    const pendingMembers = [];

    for (const row of rows) {
        const member ={
            user_id: row.user_id,
            username: row.username
        };

        if(row.status === 'active') {
            activeMembers.push(member);
        } else if (row.status === 'pending') {
            pendingMembers.push(member);
        }
    }

    return NextResponse.json({ activeMembers, pendingMembers });
    
    } catch(error) {
        console.error("Error fetching pool members:", error);
        return NextResponse.json({ message: "Server error"}, { status: 500 });
    }
}
