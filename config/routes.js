const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller')
const passport =  require('passport')

module.exports = router;

//LOGIN
//Hay que crear el middel de autentificacion
router.get('/', userController.index)
router.get('/logout', userController.logOut)
router.get('/login', userController.login)
router.post('/login', userController.dologin)

router.get('/auth/github/', passport.authenticate('github'))
router.get('/auth/github/callback', userController.doLoginSocial)


