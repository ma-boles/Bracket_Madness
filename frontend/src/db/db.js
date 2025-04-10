require('dotenv').config();

const mysql = require('mysql2/promise');


async function connectionToDatabase () {
    try {
        // Database connection
        const db = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        });
        console.log('Connected to the database');
        return db;
    } catch(error) {
        console.error('MySQL connection error:', error);
        throw error;
    }
}

module.exports = {connectionToDatabase};