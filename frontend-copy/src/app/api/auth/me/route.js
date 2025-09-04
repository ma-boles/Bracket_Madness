import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken'

export async function GET(req) {
    try {
        const token = req.cookies.get('token')?.value;
        if(!token) {
            return NextResponse.json({ error: 'Unauthorized'}, { status: 401});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return NextResponse.json({ userId: decoded.userId, username: decoded.username });
    
    } catch(error) {
        return NextResponse.json({ error:'Invalid token' }, { status: 401 });
    }
}