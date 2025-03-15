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

// Handles POST (Log In)
export async function POST(req) {
    const { username, password} = Object.fromEntries(req.nextUrl.searchParams);

    // Fetch user from MySQL
    const[rows] = await db.execute(
        'SELECT * FROM users WHERE username = ?',
        [username]
    );

    const user = rows[0];

    // If user not found
    if(!user) {
        return NextResponse.json({ messge: 'User not found' }, { status: 401 });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch) {
        return NextResponse.json({ message: 'Password invalid'}, { status: 401 });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: username }, 'secret_key', {
        expiresIn: '1h',
    });

    // Send toke to frontend
    return NextResponse.json({ token });
}
