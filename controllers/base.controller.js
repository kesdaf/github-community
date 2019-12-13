const search = require('../api/githubSearchRepositories')

module.exports.index = (req, res, next) => {
  const languages = req.session.languages;
  const date = req.session.date;
  search({languages, date}).then(results =>{
        res.render('index', {results})
  }).catch(err=> console.log(err))

}
