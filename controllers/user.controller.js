const mongoose = require('mongoose');
const User = require('../models/user.model');
const passport = require('passport')

module.exports.login = (req, res, next) => {
  res.render('login/index')
}

module.exports.dologin = (req, res, next) => {
  
}

module.exports.doLoginSocial = (req, res, next) => {
  console.log('Auth with github...')

  const authFn = passport.authenticate('github', (error, user) => {
    console.log('done github...')
    res.send(user)
  })

  authFn(req, res, next)
}
