<<<<<<< HEAD
const withImages = require('next-images')
module.exports = withImages()

// module.exports = {
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       issuer: {
//         test: /\.(js|ts)x?$/,
//       },
//       use: ['@svgr/webpack'],
//     })

//     return config
//   },
// }
=======
const dotenv = require("dotenv").config();

module.exports = {
  env: dotenv.parsed
};
>>>>>>> a5bc678bba29d64d69351fddcbbceb2316dc144f
