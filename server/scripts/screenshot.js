const url = require('url')
const fs = require('fs')
const { exec } = require('child_process')
const { waitForTimeout, requestAllNiceLinks } = require('./utils')

const screenshotNameArr = fs.readdirSync(`${process.cwd()}/screenshot/`)

const screenshot = async () => {
  const allNiceLinks = await requestAllNiceLinks()
  console.log(`总获取数据 ${allNiceLinks.value.length} 条`)
  const needDownloadImgArr = allNiceLinks.value.filter(item => {
    const hostname = url.parse(item.urlPath).hostname
    return !screenshotNameArr.includes(`${hostname}.png`)
  })
  console.log(`需要截屏共 ${needDownloadImgArr.length} 条`)

  needDownloadImgArr.forEach(async item => {
    await waitForTimeout(3000)
    const hostname = url.parse(item.urlPath).hostname
    const savepath = `${process.cwd()}/screenshot-new/${hostname}.png`
    const screenshotCommand = `screenshoteer --url ${item.urlPath} --w 1280 --h 720 --fullpage false --waitfor 50000 --file ${savepath}`
    exec(screenshotCommand, (error, stdout, stderr) => {
      console.log(stdout)
      if (error) return console.error(`✘ Opps, Something Error: ${error}`)
    })
  })
}

screenshot()
