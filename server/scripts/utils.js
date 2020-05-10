const axios = require('axios')

const requestAllNiceLinks = () => {
  return new Promise((resolve, reject) => {
    const requestUrl = 'https://nicelinks.site/api/getNiceLinks'
    const params = {
      pageCount: 1,
      pageSize: 500,
      sortType: -1,
      sortTarget: 'likes',
      active: 'true'
    }
    return axios.get(requestUrl, { params }).then((result) => {
      resolve(result.data)
    }).catch(err => {
      console.log("Opps, Axios Error Occurred !" + err)
      resolve({})
    })
  })
}

module.exports = {
  requestAllNiceLinks
}