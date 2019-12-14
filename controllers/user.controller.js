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
module.exports.new = (req, res, next) => {
  res.render('login/profile', { new: true })
}

module.exports.updateProfile = (req, res, next) => {

  req.file ? req.body.avatar = req.file.url : 'img/avatar.png'
  !req.body.name ? delete req.body.name : false
  !req.body.email ? delete req.body.email : false
  !req.body.username ? delete req.body.username : false
  !req.body.password ? delete req.body.password : false

    if (req.session.user) {
      User.findByIdAndUpdate(req.session.user._id, req.body, { new: true })
      .then(usr => {
        req.session.user = usr
        res.redirect('/')
      })
      .catch(err => {
        console.log('error => ' + err)
      })
    } else {
      const user = new User({
        username: req.body.username,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        avatar: req.body.avatar
      })
      user.save()
      .then((newUser) => {
        res.redirect('/login')
      })
      .catch(error => {
        if (error instanceof mongoose.Error.ValidationError) {
          res.render('login/profile', { user, error: error.errors, new: true })
        } else {
          next(error);
        }
      })
    }
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
