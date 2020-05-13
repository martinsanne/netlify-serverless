const parser = require('oembed-parser')
// const axios = require('axios')

exports.handler = (event, context, callback) => {
  // const OEMBED_PROVIDERS_URL = 'https://oembed.com/providers.json'
  // const URL = 'https://www.youtube.com/watch?v=bzMMDNiaBo8'
  console.log(parser)
  const URL = 'https://vimeo.com/412071250'
  parser
    .extract(URL)
    .then((res) => {
      // console.log(res)
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          // result: res,
          url: URL,
          status: 'success',
        }),
      })
    })
    .catch((err) => {
      callback(null, {
        statusCode: 500,
        body: JSON.stringify({
          // result: res,
          url: URL,
          status: 'error',
        }),
      })
    })

  // axios
  //   .get(OEMBED_PROVIDERS_URL)
  //   .then((res) => {
  //     console.log(res)
  //     callback(null, {
  //       statusCode: 200,
  //       body: JSON.stringify({
  //         // result: res,
  //         status: 'success',
  //       }),
  //     })
  //   })
  //   .catch((err) => {
  //     callback(err)
  //   })
  // try {
  //   const response = await axios.get(OEMBED_PROVIDERS_URL)
  //   return {
  //     statusCode: 200,
  //     body: JSON.stringify({
  //       requested: OEMBED_PROVIDERS_URL,
  //       status: 'success',
  //       data: response,
  //     }),
  //   }
  // } catch (err) {
  //   return {
  //     statusCode: 500,
  //     body: JSON.stringify({
  //       requested: OEMBED_PROVIDERS_URL,
  //       status: 'error',
  //       data: err,
  //     }),
  //   }
  // }
}
