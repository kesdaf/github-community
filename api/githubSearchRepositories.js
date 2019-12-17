const axios = require('axios');

const githubSearch = ({languages,date}) =>{
    console.log(languages)
    let lang = 'javascript';
    if(languages &&languages.length>0){
     if(languages.length >1){
        lang =`[${languages.join(',')}]`;
     }else{
        lang = languages[0];
     }

    }
    console.log(languages)    
    const searchDate = getDate(date);

    const url = searchDate? `http://api.github.com/search/repositories?sort=starts&q=is:public+language:${lang}+pushed:${searchDate}`:
    `http://api.github.com/search/repositories?sort=starts&q=is:public+language:${lang}`;
    console.log(url)
    return axios.get(url)
    .then(success => {
        //   console.log(success)
          if(success.data && success.data.items){
              return success.data.items
          }
          return success.data;
      } )
      .catch(error => console.log(error))
}

const getDate = (dataString) =>{
    const today = new Date();
    let newDate;
    switch (dataString) {
        case 'time':
           return false;
        case 'year':
            newDate = new Date(today.getFullYear()-1, today.getMonth(), today.getDate());
            break;
        case 'month':
            newDate = new Date(today.getFullYear(), today.getMonth()-1, today.getDate());
            break;
        case 'today':
            newDate = new Date(today.getFullYear(), today.getMonth(), today.getDate()-1);
            break;            
        case 'week':
        default:
            newDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
            break;
    }
    return newDate.toISOString().split('T')[0];
}

module.exports = githubSearch;