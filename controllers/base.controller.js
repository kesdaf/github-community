const search = require('../api/githubSearchRepositories')

module.exports.index = (req, res, next) => {
  let languages = req.currentLanguages;
  const date = req.session.date;
  if(!Array.isArray(languages)){
    languages =[languages]
  }

  search({languages, date}).then(results =>{
        res.render('index', {results})
  }).catch(err=> console.log(err))
}

module.exports.sessionLanguages = (req, res, next) => {
  req.session.languages = req.body.languages;
  res.redirect('/')
}

