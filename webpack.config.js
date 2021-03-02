const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const config = {
  devtool: 'eval-cheap-module-source-map',
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  mode: 'development',
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader', exclude: /node_modules/,},
      // { test: /\.scss$/,
      //   use: [{
      //           loader: "style-loader"
      //       }, {
      //           loader: "css-loader", options: {
      //               sourceMap: true
      //           }
      //       }, {
      //           loader: "sass-loader", options: {
      //               sourceMap: true
      //           }
      //       }]
      // }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [new HTMLWebpackPlugin({
    template: 'app/index.html'
  })]
}

module.exports = config
