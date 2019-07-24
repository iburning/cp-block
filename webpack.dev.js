/**
 * @namespace webpack.dev.js
 * @author burning <www.codepie.net>
 * @version 2019.07.24
 */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackConfig = require('./webpack.config')

const DIST_PATH = path.resolve(__dirname, './examples/dist')
const SRC_PATH = './examples/src'
const PORT = 8000

const config = {
  ...webpackConfig,
  mode: 'development',
  entry: `${SRC_PATH}/main.js`,
  output: {
    path: DIST_PATH,
    filename: 'main.bundle.js',
    publicPath: '/'
  },

  externals: {},

  plugins: [
    new HtmlWebpackPlugin({
      template: `${SRC_PATH}/index.html`,
    })
  ],

  devServer: {
    compress: true,
    contentBase: DIST_PATH,
    port: PORT
  }
}

console.log(config)
module.exports = config