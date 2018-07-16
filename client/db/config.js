const mysql = require('mysql');

const db = mysql.createPool('mysql://bc64bcf7c741cd:33494f3f@us-cdbr-iron-east-04.cleardb.net/heroku_088aaa0e67b63d4?reconnect=true');

db.connect( (err) => {
  if (err) {
    console.error('Error connecting to mySQL database');
  } else {
    console.log('Connected to mySQL database');
  }
  
});

module.exports = db;