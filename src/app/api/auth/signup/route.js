import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import { cookies } from "next/headers";
import { pool } from "@/src/db/db";


export async function POST(req) {

    try {
    const { email, username, password } = await req.json();

    console.log("Received request:", { email, username });

    if(!email || !username || !password) {
        return NextResponse.json({ error: "Missing required fields"}, { status: 400 });
    }

    if(!email.includes('@')) {
        return NextResponse.json({ error: "Invalid email address "}, { status: 400 });
    }
    if(password.length < 8) {
        return NextResponse.json({ error: "Password must be at least 8 characters"}, { status: 400 });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);


    // Check for exitisting username + email
    const [existing] = await pool.execute(
        `SELECT id 
        FROM users
        WHERE email = ? OR username = ?`,
        [email, username]
    )

    if (existing.length > 0) {
        return NextResponse.json({ error: "Email or username already exists"}, { status: 409 });
    }


    // Insert into MySQL
    const[result] = await pool.execute(
        'INSERT INTO users(email, username, password) VALUES (?, ?, ?)',
        [email, username, hashedPassword]
    );


    // Generate JWT Token
    const token = jwt.sign({ userId: result.insertId, username, email}, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Set HTTP-only cookie
    const cookiesStore = await cookies();
    cookiesStore.set('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'Lax',
        maxAge: 3600,
        path: '/',
    });

    return NextResponse.json({ message:'User successfully created!'})
    
    } catch (error) {
        console.error(error);
        return NextResponse.json({error: "Internal Server Error"}, { status: 500 });
    }
}