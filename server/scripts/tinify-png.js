const fs = require('fs')
const tinify = require("tinify")
tinify.key = require("./../src/config/secret.js").tinifyKey

const targetDir = `${process.cwd()}/screenshot-new/`
const screenshotNameArr = fs.readdirSync(targetDir)

screenshotNameArr.forEach(item => {
  console.log(item)
  if (item.includes('.png')) {
    tinify.fromFile(`${targetDir}${item}`).
      toFile(`${targetDir}${item}`)
  }
})