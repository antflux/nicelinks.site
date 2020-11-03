const fs = require('fs')
const path = require('path')
const linkCheck = require('link-check')
const { requestAllNiceLinks, waitForTimeout } = require('./utils')

const brokenLinkArr = []

const findBrokenLink = (urlPath) => {
  const options = {
    timeout: '30s',
    retryCount: 5
  }
  linkCheck(urlPath, options, (err, res) => {
    if (err) {
      console.log(`Something Error @Url：${urlPath}`, err)
      brokenLinkArr.push(urlPath)
      return
    }
    if (res.statusCode !== 200) {
      console.log(`${res.link} : status ${res.status}, code ${res.statusCode}.`)
      brokenLinkArr.push(urlPath)
      out2json()
    }
  })
}

const out2json = () => {
  const filepath = path.join(__dirname, './../logs/broken-links.json')
  const brokenLinkObj = JSON.stringify(brokenLinkArr, null, 2)
  fs.writeFile(filepath, brokenLinkObj, (err) => {
    if (err) throw err
  })
}

const start = async () => {
  const allNiceLinks = await requestAllNiceLinks()
  allNiceLinks.value.forEach(async item => {
    await waitForTimeout(100)
    findBrokenLink(item.urlPath)
  })
}

start()