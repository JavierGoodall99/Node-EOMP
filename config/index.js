require('dotenv').config();
const { createPool } = require('mysql');

// Create connection variable
let connection = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    multipleStatements: true
});

module.exports = connection;
