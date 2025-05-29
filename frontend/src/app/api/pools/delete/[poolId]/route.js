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
        const decodedUser = verifyToken(token);

        if(!decodedUser || !decodedUser.userId) {
        return NextResponse.json({ message: 'Unauthorized'}, { status: 401 });
        }

        const actingUserId = decodedUser?.userId;

        if(!actingUserId) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }

        const { poolId } = await res.json();

        // Check if cting user is either creator or admin
        const [rows] = await pool.execute(
            `SELECT created_by
            FROM pools
            WHERE id = ?`,
            [poolId]
        );

        if(!rows.length) {
            return NextResponse.json({ message: 'Pool not found' }, { status: 401 });
        }

        const poolCreatorId = rows[0].created_by;

        const [membership] = await pool.execute(
            `SELECT role
            FROM pool_membership
            WHERE user_id = ? AND pool_id = ?`,
            [actingUserId, poolId]
        );

        const isAdmin = membership.length > 0  && membership[0].role === 'admin';
        const isCreator = actingUserId === poolCreatorId;

        if(!isAdmin && !isCreator) {
            return NextResponse.json(
                { message: 'Forbidden: Only creator or admin can delete this pool'  },
                { staus: 403 }
            );
        }

        // Delete all pool members
        await pool.execute(
            `DELETE FROM pool_membershi WHERE pool_id = ?`,
            [poolId]
        );

        // Delete pool
        const [result] = await pool.execute(
            `DELETE FROM pools WHERE id = ?`,
            [poolId]
        );

        if(result.affectedRows === 0) {
            return NextResponse.json({ message: 'Pool not found or already deleted' }, { status: 404 });
        }

            return NextResponse.json({ message: 'Pool deleted successfully' });

    } catch (error) {
        console.error('Delete pool error:', error);
        return NextResponse.json({ message: 'Server error' }, { stauts: 500 });
    } 
}