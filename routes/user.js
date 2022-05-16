const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController.js')
router.post('/register',userController.Register)
router.post('/login',userController.Login)
router.get('/user',userController.getAllUser)
module.exports = router