const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'db',
    user: 'Josep',
    password: '12345',
    database: 'TikiTaka',
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;