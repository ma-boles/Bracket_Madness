import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';
import { pool } from '@/src/db/db';

const verifyToken = (token) => {

    const secretKey = process.env.JWT_SECRET;

    if(!secretKey) {
        throw new Error('JWT secret key is not defined in the environment variables');
    }

    try {
        const decoded = jwt.verify(token, secretKey);
        return decoded; // Returns user info (user_id, etc.)
    } catch(error) {
        return null;
    }
};

export async function POST(req) {
    try {
        const { poolName, inviteCode } = await req.json();
        const token = req.cookies.get('token')?.value;
        const user = verifyToken(token);

        if (!user || !user.userId) {
            console.warn("Unauthorized user or missing user_id");
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }


        // Find pool by name + code
        const [poolRows] = await pool.execute(
            `SELECT id,
                pool_name
            FROM pools
            WHERE pool_name = ? AND code = ?`, 
            [poolName, inviteCode]
        );

        if(!poolRows.length) {
            return NextResponse.json({ error: "Pool not found or invalid code" }, { status: 404 });
        }


        // Check if user is already a member fo the pool
        const [membershipRows] = await pool.execute(
            `SELECT * FROM pool_membership
             WHERE pool_id = ? AND user_id =?`,
        [poolRows[0].id, user.userId]);

    if(membershipRows.length) {
        return NextResponse.json({ error: "Already a member of this pool"}, {status: 400 });
    }

    // Insert new membership
    await pool.execute(`
        INSERT INTO pool_membership (pool_id, user_id, role, status)
        VALUES (?, ?, 'member', 'pending')`,
        [poolRows[0].id, user.userId]
    );

    return NextResponse.json({ 
        message: `Successfully joined ${poolRows[0].pool_name}!`,
        poolName: poolRows[0].pool_name}, 
        {status: 200})
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Internal Sever Error"}, { status: 500});
    }
}