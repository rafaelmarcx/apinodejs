const User = require('../models/userModel')

const getUsers = (req, res) => {
    User.getAllUsers((err, results) => {
        if (err) {
            res.status(500).json({ error: err.message })
        } else {
            res.json(results)
        }
    })
}

const createUser = (req, res) => {
    const { name, email } = req.body
    User.createUser(name, email, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message })
        } else {
            res.status(201).json({ id: result.insertId, name, email })
        }
    })
}

const deleteUser = (req, res) =>  {
    const { id } = req.params
    User.deleteUser(id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message })
        } else if (result.affectedRows === 0) {
            res.status(404).json({ error: 'User not Found' })
        } else {
            res.json({ message: 'User deleted Sucessfully'})
        }
    })
}

const updateUser = (req, res) => {
    const { id } = req.params
    const { name, email } = req.body

    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' })
    }

    User.updateUser(id, name, email, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message })
        } else if (result.affectedRows === 0) {
            res.status(404).json({ error: 'User not found' })
        } else {
            res.json({ message: 'User updated successfully', id, name, email })
        }
    })
}

module.exports = {
    getUsers,
    createUser,
    deleteUser,
    updateUser
}