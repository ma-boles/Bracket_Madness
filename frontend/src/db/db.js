const mysql = require('mysql2/promise');
require('dotenv').config();

async function connectionToDatabase () {
    // Database connection
    const db = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });
    console.log('Connected to the database');
    return db;
}

connectionToDatabase()
    .then((db) => {
        console.log('Connected to MySQL!');
        db.end();
    })
    .catch((error) => {
        console.log('MySQL connection error');
    });