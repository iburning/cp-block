/**
 * @namespace webpack.config.js
 * @author burning <www.codepie.net>
 * @version 2019.07.24
 */

const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const babelOptions = {
  babelrc: false,
  plugins: [],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: [ 'last 3 versions', 'Android >= 4', 'iOS >= 8', 'ie >= 9', 'Safari >= 9' ]
        }
      }
    ],
    '@babel/preset-react'
  ]
}

module.exports = {
  mode: 'development', // development | production | none
  // mode: 'production',

  entry: './src/index.js',
  
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'CPBlock.js'
  },

  externals : {
    classnames: 'classnames',
    react: 'react'
  },

  resolve: {
    extensions: [ '.js', '.jsx', '.ts', '.tsx']
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development'
            }
          },
          {
            loader: 'css-loader'
          }
        ]
      },

      {
        test: /\.less$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development'
            }
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader'
          }
        ]
      },

      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: babelOptions
      },

      {
        test: /\.(ts|tsx)?$/i,
        use: [
          {
            loader: 'babel-loader',
            options: babelOptions
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin()
  ]
}