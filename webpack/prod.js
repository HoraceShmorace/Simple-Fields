const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./common.js')

module.exports = merge(common, {
  mode: 'production',
  output: {
    clean: true,
    library: '[name]',
    libraryTarget: 'umd',
    globalObject: 'this',
    filename: 'fields.js?ver=[hash]',
    libraryExport: 'default',
    path: path.join(__dirname, '../dist')
  }
})
