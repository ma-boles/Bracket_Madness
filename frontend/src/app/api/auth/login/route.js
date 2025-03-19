import { NextResponse } from "next/server";
import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'


// Handles POST (Log In)
export async function POST(req) {
    let db;

    try {
        const { username, password} = await req.json();

        // Database connection
        db = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        });

        // Fetch user from MySQL
        const[rows] = await db.execute(
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
        const token = jwt.sign({ userId: username }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });
        
        // Send toke to frontend
        return NextResponse.json({ token });

    } catch(error) {
        console.error('Login Error:', error);
        return NextResponse.json({ error: 'Internal Server Error'}, { status: 500 });
    } finally {
        if(db) {
            await db.end();
        }
    }
}