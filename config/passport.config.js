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
  User.findOne({ 'social.github': profile.id })
    .then(user => {
      if (user) {
        done(null, user);
        return;
      }
      const newUser = new User({
        name: profile.displayName,
        email: profile.emails[0].value,
        username: profile.username,
        password: '12345678',
        profile_url: profile.profileUrl,
        avatar: profile.photos[0].value,
        'social.github': profile.id
      })
      newUser.save()
        .then(respuesta => done(null, respuesta))
    })
    .catch(err => done(err));
} 

module.exports = passport.initialize();