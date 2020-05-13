exports.handler = async (event, context, callback) => {
  const { extract } = require('oembed-parser')
  const url = 'https://www.youtube.com/watch?v=8jPQjjsBbIc'

  try {
    const oembed = await extract(url)
    return {
      statusCode: 200,
      body: JSON.stringify({
        requested: url,
        status: 'success',
        data: oembed,
      }),
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        requested: url,
        status: 'error',
        data: err,
      }),
    }
  }
}
