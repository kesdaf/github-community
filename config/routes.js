const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller')

module.exports = router;

//LOGIN
//Hay que crear el middel de autentificacion
router.get('/login', userController.login)
router.post('/login', userController.dologin)



