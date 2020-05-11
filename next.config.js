const withImages = require('next-images')
const dotenv = require('dotenv').config()
module.exports = withImages()

module.exports = {
  env: dotenv.parsed,
}
