let { join } = require('path')

let config = {
  env: 'production',

  // Secret key for JWT signing and encryption
  'secret': 'super secret passphrase',

  // Database connection information
  'database': 'mongodb://localhost:27017/nice_links',

  // Setting port for server
  'port': process.env.PORT || 4000,

  // Avatar upload path
  'avatarUploadDir': join(__dirname, './../../upload/avatar/'),

  // Screenshot path
  'siteScreenshotDir': join(__dirname, './../../screenshot/'),

  //  Email path
  'clientPath': 'https://nicelinks.site'
}

if (process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
  config.env = 'development'
  config.clientPath = 'http://localhost:8888'
}

module.exports = config
