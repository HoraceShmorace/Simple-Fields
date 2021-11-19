const path = require('path')

module.exports = {
  entry: {
    'ReactFormstack': './src/index.js',
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [/src/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[local]__[hash:base64:5]'
            },
            sourceMap: true
          }
        }],
      }
    ],
  },
  resolve: {
    alias: {
      '~src': path.resolve(__dirname, '../src')
    },
    extensions: ['*', '.js', '.jsx']
  }
}