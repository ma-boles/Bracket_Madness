import { NextResponse } from 'next/server';
import { verifyToken } from '@/src/lib/auth';
import { cookies } from "next/headers";
import { pool } from '@/src/db/db';

export async function GET(req, { params }) {
    const poolId = params.poolId;
    console.log('Hit pool brackets API');

    try {
        const cookiesStore = await cookies();
        const token = cookiesStore.get('token')?.value;
        const decodedUser = verifyToken(token);

        if(!decodedUser) {
        return NextResponse.json({ message: 'Unauthorized'}, { status: 401 });
        }

        const [rows] = await pool.execute(
            `SELECT 
                b.id,
                u.username, 
                b.total_points AS points,
                b.pool_rank
            FROM brackets b
            JOIN users u ON u.id = b.user_id
            WHERE pool_id = ?
            ORDER BY points DESC`, 
            [poolId]
        );

        return NextResponse.json({ data: rows });
    } catch(error) {
        console.error('Error fetching pool bracket rank data:', error)
        return NextResponse.json({ error: 'Failed to fetch pool bracket rank data'}, { status: 500 });
    } 
}