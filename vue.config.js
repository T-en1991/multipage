const path = require('path')
const glob = require('glob')

const resolve = dir => path.join(__dirname, dir)
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)


const generateEntries = () => {
  // 默认查询多页面地址
  const PATH_ENTRY = path.resolve(__dirname, './src/views')
  // 约定构建出的页面用folder名字，默认入口为每个页面的main.js
  const entryFilePaths = glob.sync(PATH_ENTRY + '/**/main.js')
  const entry = {}

  entryFilePaths.forEach((filePath) => {
    const filename = filePath.match(/([^/]+)\/main\.js$/)[1]
    entry[filename] = {
      entry: filePath,
      template: `src/views/${filename}/public/index.html`,
      filename: `${filename}.html`,
      // title可不传，每个页面单独设置
      title: `${filename} Page`,
      chunks: ['chunk-vendors', 'chunk-common', filename]
    }
  })

  return entry
}

module.exports = {
  publicPath: IS_PROD?'/':'/example',
  productionSourceMap: false,
  pages: generateEntries(),
  devServer: {
    open: true
  }
}
