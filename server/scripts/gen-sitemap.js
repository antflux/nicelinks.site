const utils = require('./utils')
const fs = require('fs')

const sitemapTempStr = `
<?xml version="1.0" encoding="utf-8" standalone="yes" ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://nicelinks.site/</loc></url>
  <url><loc>https://nicelinks.site/explore/all/</loc></url>
  <url><loc>https://nicelinks.site/explore/skill/</loc></url>
  <url><loc>https://nicelinks.site/explore/resource/</loc></url>
  <url><loc>https://nicelinks.site/explore/life/</loc></url>
  <url><loc>https://nicelinks.site/explore/info/</loc></url>
  <url><loc>https://nicelinks.site/collections/theme/</loc></url>
  <url><loc>https://nicelinks.site/collections/tags/</loc></url>
  <url><loc>https://nicelinks.site/about/</loc></url>
  <url><loc>https://nicelinks.site/business/</loc></url>
  <url><loc>https://nicelinks.site/sponsor/</loc></url>
  <url><loc>https://nicelinks.site/member/admin/</loc></url>
  #PLACEHOLDER#
</urlset>`

const generate = async () => {
  const baseUrl = 'https://nicelinks.site/post/'
  const linksUrlArr = []
  const allNiceLinks = await utils.requestAllNiceLinks()
  allNiceLinks.value.forEach(item => {
    const link = `${baseUrl}${item._id}`
    const urlLocItem = `<url><loc>${link}</loc></url>`
    linksUrlArr.push(urlLocItem)
  })
  const linksUrlStr = linksUrlArr.join('\n  ')
  const sitemapContent = sitemapTempStr.replace(`#PLACEHOLDER#`, linksUrlStr)
  const outputPath = `${process.cwd()}/public/sitemap.xml`
  fs.writeFileSync(outputPath, sitemapContent)
}

generate()