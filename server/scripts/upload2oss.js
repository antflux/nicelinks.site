const { tinifyScreenshot, uploadImg2Oss } = require('./../src/helper/screenshot')

const targetUrl = process.argv[2]

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

console.log(`开始为 ${targetUrl} 网站已生成的截图 & 压缩并上传.`)

const startHandleScreenshot = async params => {
  await tinifyScreenshot(params)
  await waitForTimeout(66000)
  uploadImg2Oss(params)
}

startHandleScreenshot({
  urlPath: targetUrl
})
