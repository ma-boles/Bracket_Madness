import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { cookies } from "next/headers";
import { pool } from "@/db/db";

export async function POST(req) {

    try {
        const { username, password} = await req.json();

        console.log('Login request received:', { username });

        // Fetch user from MySQL
        const[rows] = await pool.execute(
            'SELECT * FROM users WHERE username = ?',
            [username]
        );

        const user = rows[0];


        // If user not found
        if(!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 401 });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch) {
            return NextResponse.json({ message: 'Password invalid'}, { status: 401 });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        // Set cookie in response
        const cookiesStore = await cookies();
        cookiesStore.set('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'Strict',
            maxAge: 3600,
            path: '/',
        });

        return NextResponse.json({ message: 'Login successful!'}, { status: 200});
    } catch(error) {
        console.error('Login Error:', error);
        return NextResponse.json({ error: 'Internal Server Error'}, { status: 500 });
     } 
}