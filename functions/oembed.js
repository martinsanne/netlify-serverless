// const { extract } = require('../src/oembed')

// exports.handler = (event, context, callback) => {
//   const URL = event.queryStringParameters.url
//   extract(URL)
//     .then((res) => {
//       callback(null, {
//         statusCode: 200,
//         body: JSON.stringify(res),
//       })
//     })
//     .catch((err) => {
//       callback(null, {
//         statusCode: 500,
//         body: JSON.stringify(err),
//       })
//     })
// }
export const handler = (event, context, callback) => {
  const { extract } = require('oembed-parser')
  // const { url } = JSON.parse(event.body)
  const url = 'https://vimeo.com/412071250'

  extract(url)
    .then((data) => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          result: data,
          status: 'success',
        }),
      })
    })
    .catch((err) => {
      callback(null, {
        statusCode: 500,
        body: JSON.stringify({
          error: err,
          status: 'error',
        }),
      })
    })
}
