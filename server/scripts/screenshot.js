const { launchScreenshot, tinifyScreenshot, uploadImg2Oss } = require('./../src/helper/screenshot')

const targetUrl = process.argv[2]

console.log(`开始为 ${targetUrl} 网站截屏 & 压缩并上传.`)

const waitForTimeout = delay => {
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

const startHandleScreenshot = async params => {
  const screenshotCode = await launchScreenshot(params)
  if (screenshotCode === 1) {
    await tinifyScreenshot(params)
    await waitForTimeout(50000)
    uploadImg2Oss(params)
  } else {
    console.log(`糟糕😰，发生意外，不能正常为该网站截屏.`)
  }
}

startHandleScreenshot({
  urlPath: targetUrl
})