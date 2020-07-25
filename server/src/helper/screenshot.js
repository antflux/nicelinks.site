const fs = require('fs')
const { exec } = require('child_process')
const tinify = require("tinify")
const OSS = require('ali-oss')

const Url = require("url")

const secretConf = require("./../config/secret.js")
tinify.key = secretConf.tinifyKey

const ossclient = new OSS({
  region: 'oss-cn-shenzhen',
  accessKeyId: secretConf.accessKeyId,
  accessKeySecret: secretConf.accessKeySecret,
  bucket: secretConf.bucket
});

const getScreenshotPathByUrl = (url) => {
  const hostname = Url.parse(url).hostname
	return `${process.cwd()}/screenshot/${hostname}.png`
}

exports.launchScreenshot = (params) => {
	return new Promise((resolve, reject) => {
		const targetImgPath = getScreenshotPathByUrl(params.urlPath)
		const screenshotCommand = `screenshoteer --url ${params.urlPath} --w 1280 --h 720 --fullpage false --waitfor 50000 --file ${targetImgPath}`
		exec(screenshotCommand, (error, stdout, stderr) => {
      console.log(`已经成功为 ${params.urlPath} 网站截图.`)
			console.log(stdout)
			if (error) {
				console.error(`✘ Opps, Something Error: ${error}`)
				return reject(error)
			}
			resolve(1)
		})
	})
}

exports.tinifyScreenshot = (params) => {
	return new Promise((resolve, reject) => {
		try {
			const targetImgPath = getScreenshotPathByUrl(params.urlPath)
			tinify.fromFile(targetImgPath).toFile(targetImgPath)
			resolve(1)
		} catch (error) {
			reject(error)
		}
	})
}

exports.uploadImg2Oss = async (params) => {
  try {
    // object-name 可以自定义为文件名（例如file.txt）或目录（例如abc/test/file.txt）的形式，实现将文件上传至当前Bucket或Bucket下的指定目录。
    const imgName = Url.parse(params.urlPath).hostname
    const targetImgPath = getScreenshotPathByUrl(params.urlPath)
    const content = fs.createReadStream(targetImgPath)
    let result = await ossclient.put(`${imgName}.png`, content);
    console.log(`该图片已经成功上传至 OSS`, result);
  } catch (e) {
    console.log(e);
  }
}

