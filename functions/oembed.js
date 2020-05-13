const { extract } = require('../src/oembed')

exports.handler = (event, context, callback) => {
  const URL = 'https://vimeo.com/412071250'
  extract(URL)
    .then((res) => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(res),
      })
    })
    .catch((err) => {
      callback(null, {
        statusCode: 500,
        body: 'Hello, Hell',
      })
    })
}
