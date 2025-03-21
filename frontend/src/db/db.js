const mysql = require('mysql2');
require('dotenv').config();


// Database connection
const db = await mysql.createCronnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if(err) {
        console.log('MySQL connection error');
    } else {
        console.log('Connected to MySQL!');
    }
});

module.exports = db;