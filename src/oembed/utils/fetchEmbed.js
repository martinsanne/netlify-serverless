// const fetch = require('node-fetch')
const axios = require('axios')

const fetchEmbed = async (url, provider, params = {}) => {
  const {
    provider_name, // eslint-disable-line camelcase
    provider_url, // eslint-disable-line camelcase
    url: resourceUrl,
  } = provider

  const baseUrl = resourceUrl.replace(/\{format\}/g, 'json')

  const queries = ['format=json', `url=${url}`]

  const { maxwidth = 0, maxheight = 0 } = params

  if (maxwidth > 0) {
    queries.push(`maxwidth=${maxwidth}`)
  }
  if (maxheight > 0) {
    queries.push(`maxheight=${maxheight}`)
  }

  const link = `${baseUrl}?${queries.join('&')}`
  const res = await axios.get(link)
  if (res.data) {
    return {
      provider_name, // eslint-disable-line camelcase
      provider_url, // eslint-disable-line camelcase
      data: res.data,
    }
  }
}

module.exports = fetchEmbed
