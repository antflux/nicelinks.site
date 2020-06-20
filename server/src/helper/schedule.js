const path = require('path')
const fs = require("fs")
const nodemailer = require("nodemailer")
const schedule = require('node-schedule')

let { Links, UserModel } = require('./../models/index')
const secretConf = require("./../config/secret")

const pushTempPath = path.join(__dirname, './../../views/push.html')
const pushEmailTemp = fs.readFileSync(pushTempPath, { encoding: 'utf-8' })

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

// 获取字符串实际长度(包含汉字,汉字统一按照 2 字节算;)
const getByteLength = (str = '') => {
  if (typeof str !== 'string') return str.length
  return str.replace(/[^\x00-\xff]/g, 'aa').length
}

const interceptString = (string = '', length = 80) => {
  if (getByteLength(string) > 80) {
    return string.substring(0, length) + '...'
  } else {
    return string
  }
}

// 从数据库检索，已经注册用户的 Email 信息列表；
const getAllUserInfoList = (isFullRelease = false) => {
  return new Promise((resolve, reject) => {
    return UserModel.find({ active: true })
      .sort({ created: -1 })
      .limit(isFullRelease ? 999999 : 5)
      .exec().then((result) => {
        resolve(result)
      })
  })
}

// 获取「倾城之链」最近所收录的网站信息列表；
const getLatestPostedLinkList = async () => {
  return new Promise((resolve, reject) => {
    return Links.find({ active: true })
      .sort({ created: -1 })
      .limit(6)
      .then((result) => {
        return resolve(result)
      })
  })
}

// 根据所获得的信息列表和模板，组装邮件内容；
const generateEmailContent = async () => {
  const latestPostedLinkList = await getLatestPostedLinkList()
  let emailContent = pushEmailTemp
  latestPostedLinkList.forEach((item, index) => {
    const linkDesc = interceptString(item.desc)
    emailContent = emailContent
      .replace(`#HREF-${index + 1}#`, `https://nicelinks.site/post/${item._id}`)
      .replace(`#TITLE-${index + 1}#`, item.title)
      .replace(`#DESC-${index + 1}#`, linkDesc)
  })
  return emailContent
}

// 遍历所检索出的用户群，为其逐一发送邮件推荐；
const sendEmail2User = async (params = {}) => {
  const emailContent = await generateEmailContent()

  // 对于是使用“QQ”邮箱注册用户，则使用"QQ"邮箱发送激活邮件；其他则 163 邮箱；
  const isQQRegister = params.to.indexOf('@qq.com') > -1
  const authConf = isQQRegister ? secretConf.email_qq : secretConf.email_163

  const smtpTransporter = nodemailer.createTransport({
    host: isQQRegister ? 'smtp.qq.com' : 'smtp.163.com',
    secure: true,
    auth: {
      user: authConf.account,
      pass: authConf.password
    }
  })

  smtpTransporter.sendMail({
    from: params.from || `倾城之链<${authConf.account}>`,
    to: params.to || '<1259134802@qq.com>',
    subject: '倾城之链 NICE LINKS',
    html: emailContent || 'https://www.jeffjade.com'
  }, function (err, res) {
    if (err) {
      console.log(err, res)
    } else {
      params.callback && params.callback()
    }
  })
}

// 执行发送推送邮件任务；
const execSendEmailTask = async () => {
  // 控制，是否全量发布；(否，只取前 5 位用户发送)
  const isFullRelease = true
  const allUserList = await getAllUserInfoList(isFullRelease)
  if (!allUserList || !Array.isArray(allUserList)) return

  allUserList.forEach(async user => {
    await waitForTimeout(1000)
    await sendEmail2User({
      to: user.email
    })
  })
}

const sendPushEmailRegularly = () => {
  // 自定发送邮件，每周五上午 7:30 执行一次；
  schedule.scheduleJob('0 20 8 * * 0', async () => {
    try {
      execSendEmailTask()
    } catch (err) {
      console.log(`Something Error @[execSendEmailTask]`, err)
    }
  })
}

module.exports = sendPushEmailRegularly
