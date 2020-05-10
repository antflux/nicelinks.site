const url = require('url')
const { exec } = require('child_process')
const { waitForTimeout, requestAllNiceLinks } = require('./utils')

const screenshot = async () => {
  await waitForTimeout(2000)
  const allNiceLinks = await requestAllNiceLinks()
  allNiceLinks.value.forEach(item => {
    const hostname = url.parse(item.urlPath).hostname
    const savepath = `${process.cwd()}/screenshot/${hostname}.png`
    const screenshotCommand = `screenshoteer --url ${item.urlPath} --w 1280 --h 720 --fullpage false --waitfor 5000 --file ${savepath}`
    exec(screenshotCommand, (error, stdout, stderr) => {
      console.log(stdout)
      if (error) return console.error(`✘ Opps, Something Error: ${error}`)
    })
  })
}

screenshot()
