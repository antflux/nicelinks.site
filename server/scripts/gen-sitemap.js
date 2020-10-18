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
  <url><loc>https://nicelinks.site/theme/program/</loc></url>
  <url><loc>https://nicelinks.site/theme/design/</loc></url>
  <url><loc>https://nicelinks.site/theme/search/</loc></url>
  <url><loc>https://nicelinks.site/theme/tools/</loc></url>
  <url><loc>https://nicelinks.site/theme/books/</loc></url>
  <url><loc>https://nicelinks.site/theme/community/</loc></url>
  <url><loc>https://nicelinks.site/theme/forum/</loc></url>
  <url><loc>https://nicelinks.site/theme/product/</loc></url>
  <url><loc>https://nicelinks.site/theme/picture/</loc></url>
  <url><loc>https://nicelinks.site/theme/icons/</loc></url>
  <url><loc>https://nicelinks.site/theme/typeface/</loc></url>
  <url><loc>https://nicelinks.site/theme/interesting/</loc></url>
  <url><loc>https://nicelinks.site/theme/travel/</loc></url>
  <url><loc>https://nicelinks.site/theme/diary/</loc></url>
  <url><loc>https://nicelinks.site/theme/find/</loc></url>
  <url><loc>https://nicelinks.site/theme/colligate/</loc></url>
  <url><loc>https://nicelinks.site/theme/technology/</loc></url>
  <url><loc>https://nicelinks.site/theme/education/</loc></url>
  <url><loc>https://nicelinks.site/theme/jobs/</loc></url>
  <url><loc>https://nicelinks.site/theme/history/</loc></url>
  <url><loc>https://nicelinks.site/theme/humanity/</loc></url>
  <url><loc>https://nicelinks.site/theme/entertainment/</loc></url>
  <url><loc>https://nicelinks.site/theme/religion/</loc></url>
  <url><loc>https://nicelinks.site/tags/AI</loc></url>
  <url><loc>https://nicelinks.site/tags/CDN/</loc></url>
  <url><loc>https://nicelinks.site/tags/CSS/</loc></url>
  <url><loc>https://nicelinks.site/tags/PDF/</loc></url>
  <url><loc>https://nicelinks.site/tags/Git/</loc></url>
  <url><loc>https://nicelinks.site/tags/Svg/</loc></url>
  <url><loc>https://nicelinks.site/tags/PPT/</loc></url>
  <url><loc>https://nicelinks.site/cemetery/</loc></url>
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