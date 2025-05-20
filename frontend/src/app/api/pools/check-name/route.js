import { connectionToDatabase } from '@/db/db';
import { NextResponse } from 'next/server';
require('dotenv').config();

const db = await connectionToDatabase();

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const name = searchParams.get('name');

    if(!name) {
        return NextResponse.json({ available: false}, { status:400 });
    }

    const [rows] = await db.execute(
        `SELECT COUNT(*) AS count 
         FROM pools
         WHERE name = ?`,
    [name]);

    const available = rows[0].count === 0;

    return NextResponse.json({ available });
}