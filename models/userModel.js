const db = require ('../config/db');

const createUser = (name, email, callback) => {
    const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
    db.query(sql, [name, email], callback);
};

const getAllUsers = (callback) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, callback);

};

module.exports = {
    createUser,
    getAllUsers,
    deleteUser,
    updateUser
};