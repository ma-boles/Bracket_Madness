import { NextResponse } from 'next/server';
import { pool } from '@/src/db/db';
require('dotenv').config();


export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const name = searchParams.get('name');

    if(!name) {
        return NextResponse.json({ available: false}, { status:400 });
    }

    const [rows] = await pool.execute(
        `SELECT COUNT(*) AS count 
         FROM pools
         WHERE pool_name = ?`,
        [name]);

    const available = rows[0].count === 0;

    return NextResponse.json({ available });
}