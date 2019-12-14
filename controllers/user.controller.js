const mongoose = require('mongoose')
const User = require('../models/user.model')
const Languages = require('../models/languages.model')
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
  Languages.find({},{_id:0,name:1,value:1}).then(languages => {
    res.render('login/profile', { user: req.session.user, languages})
  })
  
}
module.exports.updateProfile = (req, res, next) => {

  req.file ? req.body.avatar = req.file.url : false
  !req.body.name ? delete req.body.name : false
  !req.body.email ? delete req.body.email : false
  !req.body.username ? delete req.body.username : false
  !req.body.password ? delete req.body.password : false

  console.log(req.body)

  User.findByIdAndUpdate(req.session.user._id, req.body, { new: true })
    .then(usr => {
      req.session.user = usr
      res.redirect('/')
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
