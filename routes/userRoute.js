const express = require ('express')
const router = express.Router()
const userController = require('../controllers/usercontroller')
const { deleteUser } = require('../models/userModel')

router.get('/users', userController.getUsers)

router.post('/users', userController.createUser)

router.delete('/users/:id', userController.deleteUser)

router.put('/users/:id', userController.updateUser)

module.exports = router