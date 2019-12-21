const axios = require('axios');

const gitLang = () =>{
    return axios.get(`http://api.github.com/languages`)
    .then(success => {
        //   console.log(success)
          return success.data;
      } )
      .catch(error => console.log(error))
}

module.exports = gitLang;