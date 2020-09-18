const mysql = require('mysql');

const db = mysql.createConnection({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'acheaqui'
});

module.exports = db;
