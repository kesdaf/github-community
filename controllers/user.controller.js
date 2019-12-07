const mongoose = require('mongoose');
const User = require('../models/user.model');

module.exports.login = (req, res, next) => {
  res.render('login/index')
}

module.exports.dologin = (req, res, next) => {
  console.log('post al login')
}
