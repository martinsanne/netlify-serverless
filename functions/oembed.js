// const extract = require('oembed-parser')

// exports.handler = async (event) => {
//   const url =
//     event.queryStringParameters.url ||
//     'https://www.youtube.com/watch?v=8jPQjjsBbIc'

//   try {
//     const oembed = await extract(url)
//     return {
//       statusCode: 200,
//       body: oembed,
//     }
//   } catch (err) {
//     console.trace(err)
//   }
// }
export const handler = (event, context, callback) => {
  const { extract } = require('oembed-parser')
  // const { url } = JSON.parse(event.body)
  const url =
    event.queryStringParameters.url ||
    'https://www.youtube.com/watch?v=8jPQjjsBbIc'

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
