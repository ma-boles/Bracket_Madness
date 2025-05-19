import mysql from 'mysql2';
import jwt from 'jsonwebtoken';
import { connectionToDatabase } from '@/db/db';
import { NextResponse } from 'next/server';
require('dotenv').config();

const db = await connectionToDatabase();
// Utility function to verify JWT token
const verifyToken = (token) => {

    const secretKey = process.env.JWT_SECRET;

    if(!secretKey) {
        throw new Error('JWT secret key is not defined in the environment variables');
    }

    try {
        const decoded = jwt.verify(token, secretKey);
        return decoded; // Returns user info (user_id, ect)
    } catch(error) {
        return null;
    }
};

export async function POST(req) {
    try {
        const { poolName, inviteCode, token } = await req.json();

        // verify user token
        const user = verifyToken(token);
        if(!user) {
            return NextResponse.json({ error: 'Unauthorized'}, { status: 401 });
        }

        // find pool by name + code
        const pool = await db.execute(`
            SELECT id
            FROM pools
            WHERE pool_name = ? AND code = ?
            `, [poolName, inviteCode]
        );

        if(!pool.length) {
            return NextResponse.json({ error: "Pool not found or invalid code" }, { status: 404 });
        }

        // check if user is already a member fo the pool
        const membership = await db.execute(`
            SELECT * FROM pool_membership
            WHERE pool_id = ? AND user_id =?`,
        [pool[0].indexOf, user.user_id]);

    if(membership.length) {
        return NextResponse.json({ error: "Already a member of this pool"}, {status: 400 });
    }

    // insert new membership
    await db.execute(`
        INSERT INTO pool_membership (pool_id, user_id, role, status)
        VALUES (?, ?, 'member', 'pending')`,
        [pool[0].id, user.user_id]
    );

    return NextResponse.json({ message: `Successfully joined ${poolName}!`}, {status: 200})
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Internal Sever Error"}, { status: 500});
    }
}