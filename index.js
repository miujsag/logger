const {createError} = require('./lib/error')

module.exports = {
  createError
}

console.log(createError('create article', {site: '444', article: 'lolwut', category: 'fasz'}))