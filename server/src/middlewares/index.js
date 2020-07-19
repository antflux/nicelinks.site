const path = require('path')
const fs = require('fs')
const cors = require('koa2-cors')
const json = require('koa-json')
const views = require('koa-views')
const convert = require('koa-convert')
const KoaStatic = require('koa-static')
const KoaHelmet = require('koa-helmet')
const KoaMount = require('koa-mount')
const KoaSession = require('koa-session2')
const KoaRedis = require('koa-redis')
const Bodyparser = require('koa-bodyparser')

const bodyparser = Bodyparser()

const config = require('./../config')

/**
 * @desc: 获取到对应网站的首屏截图；
 */
const handleGetScreenshot = async (ctx, next) => {
  await next()
  const screenshotNameArr = fs.readdirSync(config.main.siteScreenshotDir)
  const imgName = ctx.request.url.replace('/', '')
  const isDownload2Local = screenshotNameArr.includes(imgName)
  const targetImgName = isDownload2Local ? imgName : '/nicelinks.site.png'
  const filePath = path.join(config.main.siteScreenshotDir, targetImgName)
  const result = await fs.readFileSync(filePath)
  ctx.body = result
}

function applyMiddleware (app) {
  app.use(cors({
    origin: '*',
    maxAge: 1000,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept']
  }))

  app.use(convert(bodyparser))
  app.use(convert(json()))
  app.use(KoaHelmet())

  // 替换'x-koa-redis-cache' 为'x-server-cache' 同helmet信息隐藏
  app.use(async (ctx, next) => {
    await next()
    if (ctx.response.get('x-koa-redis-cache')) {
      ctx.remove('x-koa-redis-cache')
      ctx.set('x-server-cache', true)
    }
  })

  app.proxy = true
  app.use(KoaSession({
    store: new KoaRedis(config.redis.session),
    key: 'SESSIONID',
    maxAge: 86400000,
    overwrite: true,
    httpOnly: true,
    signed: true
  }))
  app.use(config.passport.initialize())
  app.use(config.passport.session())

  app.use(require('./cache').RedisCache)

  // handle static
  app.use(convert(KoaStatic(path.join(__dirname, '../../public'), {
      pathPrefix: ''
  })))

  app.use(KoaMount('/api/avatar', KoaStatic(config.main.avatarUploadDir)))
  // app.use(KoaMount('/api/screenshot', handleGetScreenshot))

  // handle views
  app.use(views(path.join(__dirname, '../../views'), {
    extension: 'ejs'
  }))

  // handle 404
  app.use(async(ctx) => {
    ctx.status = 404
    await ctx.render('404')
  })

  // hanle logger
  app.use(async(ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
  })
}

exports.applyMiddleware = applyMiddleware