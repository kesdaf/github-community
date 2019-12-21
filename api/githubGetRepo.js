const axios = require('axios');

const gitRepo = (id) =>{
    return axios.get(`http://api.github.com/repositories/${id}`)
    .then(success => {
      return success.data;
    })
    .catch(error => console.log(error))
}

module.exports = gitRepo;