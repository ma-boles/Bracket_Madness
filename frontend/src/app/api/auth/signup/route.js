import { NextResponse } from "next/server";
import mysql from 'mysql2';
import bcrypt from 'bcrypt';
require('dotenv').config();


// Database connection
const db = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Handle POST (Sign Up)
export async function POST(req) {
    const { username, password } = await req.json();

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert into MySQL
    const[result] = await db.execute(
        'INSERT INTO users(username, password) VALUES (?, ?)',
        [username, hashedPassword]
    );

    // Generate JWT Token
    const token = jwt.sign({ username }, 'secret_key', { expiresIn: '1h'});

    return NextResponse.json({ message:'User successfully created!'})
}