const mysql = require('mysql');

const db = mysql.createConnection({
  user: 'root',
  password: 'password',
  database: 'pokemon'
});

db.connect( (err) => {
  if (err) {
    console.error('Error connecting to mySQL database');
  } else {
    console.log('Connected to mySQL database');
  }
  
});

module.exports = db;