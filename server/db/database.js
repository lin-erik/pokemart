const mysql = require('mysql');

const db = mysql.createConnection({
  user: 'root',
  password: 'password',
  database: 'pokemon'
});

db.connect( (err) => {
  if (err) {
    throw new Error('Unable to connect to mySQL database');
  } else {
    console.log('Connected to database');
  }
});

module.exports = db;