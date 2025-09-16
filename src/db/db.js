import dotenv from "dotenv";
dotenv.config();
const mysql = require('mysql2/promise');

let pool;

if(!global.pool) {
    global.pool = mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        waitForConnections: true,
        connectionLimit: 10,
    });
}

pool = global.pool;

module.exports = { pool };