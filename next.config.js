// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  output: 'export',
  options: {
    providerImportSource: '@mdx-js/react', 
  /* otherOptions… */}
})

module.exports = withMDX({
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
})

const debug = process.env.NODE_ENV !== 'production'

module.exports.assetPrefix = !debug ? '/intelligent_humanoid_robotics/' : '';
