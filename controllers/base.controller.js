const search = require('../api/githubSearchRepositories')
const Favorites =  require('../models/favorites.model')

module.exports.index = (req, res, next) => {
  let languages = req.currentLanguages;
  
  if(!Array.isArray(languages)){
    languages =[languages]
  }

  Favorites.find({ idUser: req.currentUser._id }, { _id: 0, idRepo: 1 })
    .then(success => {
      console.log(success)
      req.currentUser.favorites = success
      const date = req.currentSearchDate ;
      search({languages, date}).then(results =>{
            res.render('index', {results})
      }).catch(err=> console.log(err))
    })
}

module.exports.sessionLanguages = (req, res, next) => {
  console.log(req.body)
  if(req.body.languages){
    req.session.languages = req.body.languages;
  }else if(req.body.searchDate){
    req.session.date = req.body.searchDate;
  }else{
    req.session.languages = [];
  }

  res.redirect('/')
}

