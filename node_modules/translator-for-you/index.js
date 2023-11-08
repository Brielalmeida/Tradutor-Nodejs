const translate = require('translate-google');

module.exports = async function(word, language) {
  try {
    const res = await translate(word, {to: language});
    return res;
  } catch (err) {
    throw err;
  }
};
