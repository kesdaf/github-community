const passport = require("passport");
const User = require("../models/user.model");
const GitHubStrategy = require('passport-github').Strategy;

passport.use(
  'github',
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: '/auth/github/callback'
    },
    authenticateGitHubUser
  )
);


function authenticateGitHubUser(accessToken, refreshToken, profile, done) {
  // to see the structure of the data in received response:
  console.log(profile);

  // User.findOne({ slack: profile.id })
  //   .then(user => {
  //     if (user) {
  //       done(null, user);
  //       return;
  //     }
  //     const newUser = new User({
  //       name: profile.user.name,
  //       email: profile.user.email,
  //       username: profile.displayName,
  //       password: '12345678',
  //       avatar: profile.user.image_192,
  //       slack: profile.user.id
  //     })
  //     newUser.save()
  //       .then(respuesta => done(null, respuesta))
  //   })
  //   .catch(err => done(err)); // closes User.findOne()
} 

module.exports = passport.initialize();