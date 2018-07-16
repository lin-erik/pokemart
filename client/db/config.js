const mysql = require('mysql');

const db = mysql.createPool('mysql://bc64bcf7c741cd:33494f3f@us-cdbr-iron-east-04.cleardb.net/heroku_088aaa0e67b63d4?reconnect=true');

module.exports = db;