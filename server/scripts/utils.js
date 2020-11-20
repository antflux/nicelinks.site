const axios = require('axios')

const requestAllNiceLinks = () => {
  return new Promise((resolve, reject) => {
    const requestUrl = 'https://nicelinks.site/api/getNiceLinks'
    const params = {
      pageCount: 1,
      pageSize: 1000,
      sortType: 1,
      sortTarget: 'created',
      alive: 1,
      active: true
    }
    return axios.get(requestUrl, { params }).then((result) => {
      resolve(result.data)
    }).catch(err => {
      console.log("Opps, Axios Error Occurred !" + err)
      resolve({})
    })
  })
}

const waitForTimeout = (delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(true)
      } catch (e) {
        reject(false)
      }
    }, delay)
  })
}

module.exports = {
  waitForTimeout,
  requestAllNiceLinks
}