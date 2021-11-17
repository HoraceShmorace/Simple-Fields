const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './public',
  },
  output: {
    clean: true,
    filename: 'fields.js?ver=[hash]',
    library: {
      name: 'Fields',
      type: 'var'
    },
    libraryExport: 'default',
    path: path.join(__dirname, '../dist')
  }
})
