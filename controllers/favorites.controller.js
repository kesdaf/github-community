const mongoose = require('mongoose')
const Favorites = require('../models/favorites.model')
const gitRepo = require('../api/githubGetRepo')

module.exports.doFavorites = (req, res, next) => {  
  const favo = new Favorites({
    idUser: req.currentUser._id,
    idRepo: req.params.id
  })
  
  favo.save()
    .then(success => res.json(success))
    .catch(err => console.log(err))

  
}

module.exports.showFavorites = (req, res, next) => {
  let promises = []
  let fav = []

  Favorites.find({ idUser: req.currentUser._id })
    .then(success => {
      success.forEach(e => {
        fav.push(e._id)
        promises.push(gitRepo(e.idRepo))
      })

      Promise.all(promises).then(results => { 
        req.currentUser.favorites = fav
        res.render('favorites/index', { results })
      });
      
    })
    .catch(err => console.log(err))
}

module.exports.removeFavorites = (req, res, next) => {
  Favorites.deleteOne({ idUser: req.currentUser._id , idRepo: req.params.id })
    .then(success => {
       // res.redirect('/favorite')
       res.json(success)
    })
    .catch(err => console.log(err))
}