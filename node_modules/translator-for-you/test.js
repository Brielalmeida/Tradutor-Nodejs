const translate = require('./index');

translate('hello', 'de').then(res => {
  console.log(res);
}).catch(err => {
  console.error(err);
});
