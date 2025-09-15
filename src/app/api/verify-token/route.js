import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

export async function POST(req) {
    const { token } = await req.body();

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return NextResponse.json({ userId: decoded.userId });
    } catch(error) {
        return NextResponse.json({ error: 'Invalid token'}, { status: 403 });
    }
}