const mongoose = require('mongoose');
const User = require('../models/user.model');
const passport = require('passport')

module.exports.login = (req, res, next) => {
  res.render('login/index')
}

module.exports.dologin = (req, res, next) => {
  
}

module.exports.logOut = (req, res, next) => {
  req.session.destroy()
  res.redirect('/login')
}

module.exports.doLoginSocial = (req, res, next) => {
  const authFn = passport.authenticate('github', (error, user) => {
    req.session.user = user
    res.redirect('/')
  })
  authFn(req, res, next)
}
