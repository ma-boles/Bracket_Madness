import { NextResponse } from 'next/server';
import { verifyToken } from "@/lib/auth";
import { cookies } from "next/headers";
import { pool } from "@/db/db";

export async function DELETE(req, context) {
    const params = await context.params;
    const poolId = params.poolId;

    try {
        const cookiesStore = await cookies();
        const token = cookiesStore.get('token')?.value;

        if(!token) {
        return NextResponse.json({ message: 'No token provided' }, { status: 401 });
        }

        // Verify and decode token
        const decoded = verifyToken(token);
        const userId = decoded?.userId;

        if(!userId) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }


        // Leave pool
        const [result] = await pool.execute(
            `DELETE FROM pool_membership 
            WHERE user_id = ? AND pool_id = ?`,
            [userId, poolId]
        );

        if(result.affectedRows === 0) {
            return NextResponse.json({ message: 'You are not a member of this pool or already left' }, { status: 404 });
        }

            return NextResponse.json({ message: 'Successfully left the pool' });

    } catch (error) {
        console.error('Leave pool error:', error);
        return NextResponse.json({ message: 'Server error' }, { status: 500 });
    } 
}