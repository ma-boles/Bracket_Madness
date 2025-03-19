import { NextResponse } from "next/server";
import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'


// Handle POST (Sign Up)
export async function POST(req) {
    let db;

    try {
    const { username, password } = await req.json();

    console.log("Received request:", { username, password });

    // Database connection
    db = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert into MySQL
    const[result] = await db.execute(
        'INSERT INTO users(username, password) VALUES (?, ?)',
        [username, hashedPassword]
    );

    // Close connection after successful query
    await db.end();

    // Generate JWT Token
    const token = jwt.sign({ username }, 'secret_key', { expiresIn: '1h'});

    return NextResponse.json({ message:'User successfully created!'})
    
    } catch (error) {
        console.error(error);

        if(db) {
            await db.end();
        }

        return NextResponse.json({error: "Internal Server Error"}, { status: 500 });
    }
}