require('../config/db.config')
const getLangs = require('../api/githubGetLanguages')

const Languages = require('../models//languages.model')

Languages.deleteMany({}).then(()=>{
    getLangs().then(langs =>{
        langs.forEach(element => {
            language = new Languages({
                name:element.name, 
                value:element.aliases[0]});
            console.log(language)
            language.save();
       });
    })
    .catch(err => console.log(err));
});