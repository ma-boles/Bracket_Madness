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
    const body = await req.json();
    const { poolName } = body;
    const token = req.cookies.get('token')?.value;

    if(!token) {
        return NextResponse.json({ error: 'No token provided' }, { status: 401 });
    }

    const decoded = verifyToken(token);
    if(!decoded || !decoded.userId) {
        return NextResponse.json({ error: 'Invalid token' }, { status: 403 });
    }

    const userId = decoded.userId;
    const generateCode = () => Math.random().toString(36).substring(2, 8).toUpperCase();
    const inviteCode = generateCode();

    try {
        const [poolResult] = await db.execute(`
            INSERT INTO pools (pool_name, code, created_by) VALUES(?, ?, ?)`,
        [poolName, inviteCode, userId]);

        const poolId = poolResult.insertId;

        await db.execute(`
            INSERT INTO pool_membership (pool_id, user_id, role, status) VALUES(?, ?, 'admin', 'active')`,
        [poolId, userId]);

        return NextResponse.json({ success: true, poolId, poolName,inviteCode });
    } catch(error) {
        console.error(error);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
} 