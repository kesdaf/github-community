const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller')

module.exports = router;


//Hay que crear el middel de autentificacion
router.get('/', userController.login)
