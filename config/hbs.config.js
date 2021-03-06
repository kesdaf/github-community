const hbs = require('hbs');
const path = require('path');

hbs.registerPartials(path.join(__dirname, '../views/partials'));

hbs.registerHelper('date', (date) => {
  const format = (s) => (s < 10) ? '0' + s : s
  var d = new Date(date)
  return [format(d.getDate()), format(d.getMonth() + 1), d.getFullYear()].join('/')
})

hbs.registerHelper('ifIn', function(elem, list, options) {
  if(!list){
    return options.inverse(this);
  }

  if(list.indexOf(elem) > -1) {
    return options.fn(this);
  }
  return options.inverse(this);
});


hbs.registerHelper('ifInObject', function(elem, list, options) {
    if(!list){
      return options.inverse(this);
    }
  
    if(list.some(e => e._id == elem)) {
      return options.fn(this);
    }
    return options.inverse(this);
  });

hbs.registerHelper('ifInArray', function(elem, list, options) {
  if(!list){
    return options.fn(this);
  }
  if(list.some(e => e.idRepo == elem)) {
    return options.inverse(this);
  }
  return options.fn(this);

});

hbs.registerHelper('rounded', number => {
  const num = Number(number)
  return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
});

hbs.registerHelper('dateSentence', date => {
  return `The best repositories of ${date !== 'today' ? 'the' : ''} ${date}`
});