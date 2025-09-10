import { NextResponse } from 'next/server';
import { verifyToken } from '@/src/lib/auth';
import { pool } from '@/src/db/db';


export async function DELETE(req) {

  try {
    const token = req.cookies.get('token')?.value;
    console.log('🔑 Token retrieved:', token ? '[REDACTED]' : 'None');

    const decodedUser = verifyToken(token);

    if(!decodedUser) {
      console.warn('⛔ Invalid or missing token — unauthorized access attempt');

      return NextResponse.json({ message: 'Unauthorized'}, { status: 401 });
    }

    const { userId, poolId } = await req.json();
    console.log('Removing userId:', userId, 'from poolId:', poolId);

    const actingUserId = decodedUser.userId;
    const isSelf = actingUserId === userId;

    if(!isSelf) {
        // Only admins can remove other users
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

        console.log('isCreator:', isCreator, '| isAdmin:', isAdmin);

        if(!isCreator && !isAdmin) {
        return NextResponse.json({ message: "Forbidden - only admins allowed to remove other users" }, { status: 403 });
    }
}

    // Allow for self=removal
    const [result] = await pool.execute(
        `DELETE FROM pool_membership
        WHERE user_id = ? AND pool_id = ?`,
        [userId, poolId]
    );

    if(result.affectedRows === 0) {
        return NextResponse.json({ message: "No matching member found"}, { status: 404 });
    } 

    return NextResponse.json({ message: "Member removed successfully."});

    } catch(error) {
        console.error("Error in DELETE /api/pools/member/remove:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    }
}