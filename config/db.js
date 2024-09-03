const mysql = require ('mysql')

const db = mysql.createConnection({
    host: '127.0.01',
    user: 'root',
    password: '123456789',
    database: 'apinodejs',
    port: 3306
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:' , err);
        return;
    }
    console.log('Connected to th MySQL database');
});

module.exports = db;