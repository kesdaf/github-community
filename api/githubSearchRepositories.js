const axios = require('axios');

const githubSearch = ({languages,date}) =>{
    if(!date){
        const today = new Date(); 
        date = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7).toDateString();
    }
    if(!languages){
        languages = ['Javascript'];
    }
    const searchDate = new Date(date).toISOString().split('T')[0];

    return axios.get(`http://api.github.com/search/repositories?sort=starts&q=is:public+language:[${languages.join(',')}]+pushed:${searchDate}`)
    .then(success => {
        //   console.log(success)
          if(success.data && success.data.items){
              return success.data.items
          }
          return success.data;
      } )
      .catch(error => console.log(error))
}

module.exports = githubSearch;