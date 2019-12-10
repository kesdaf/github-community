const mongoose = require('mongoose')
const User = require('../models/user.model')
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

module.exports.profile = (req, res, next) => {
  res.render('login/profile', { user: req.session.user })
}
module.exports.updateProfile = (req, res, next) => {
  User.findById(req.session.user._id)
    .then(usr => {
      if(req.file) {
        usr.avatar = req.file.url
      } else if (!usr.avatar) {
        usr.avatar = 'img/github-logo.svg'
      }
      usr.languages = req.body.language

      usr.save()
        .then(success => console.log(success))
        .catch(err => console.log(err))
    })
    .catch(err => {
      console.log(err)
    })

}

module.exports.doLoginSocial = (req, res, next) => {
  const authFn = passport.authenticate('github', (error, user) => {
    req.session.user = user
    if(user.languages.length !== 0) {
      res.redirect('/')
    } else {
      res.redirect('/profile')
    }
    
  })
  authFn(req, res, next)
}
