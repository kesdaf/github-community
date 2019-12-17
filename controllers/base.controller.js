const search = require('../api/githubSearchRepositories')

module.exports.index = (req, res, next) => {
  let languages = req.currentLanguages;
  const date = req.currentSearchDate ;
  if(!Array.isArray(languages)){
    languages =[languages]
  }

  search({languages, date}).then(results =>{
        res.render('index', {results})
  }).catch(err=> console.log(err))
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

