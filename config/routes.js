const express = require('express');
const router = express.Router();
const baseController = require('../controllers/base.controller')
const userController = require('../controllers/user.controller')
const passport =  require('passport')
const uploadCloud = require('./cloudinary.config');
const authMiddleware = require('../middlewares/auth.middleware')

module.exports = router;

//BASE
router.get('/', authMiddleware.isAuthenticated, baseController.index)

//LOGIN
//Hay que crear el middel de autentificacion
router.get('/login', authMiddleware.isNotAuthenticated, userController.login)
router.post('/login', authMiddleware.isNotAuthenticated, userController.dologin)
router.get('/logout', authMiddleware.isAuthenticated, userController.logOut)
router.get('/profile', authMiddleware.isAuthenticated, userController.profile)
router.post('/profile', authMiddleware.isAuthenticated, uploadCloud.single('avatar'), userController.updateProfile)

router.get('/auth/github/', authMiddleware.isNotAuthenticated, passport.authenticate('github'))
router.get('/auth/github/callback',authMiddleware.isNotAuthenticated, userController.doLoginSocial)


