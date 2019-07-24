/**
 * @namespace webpack.config.js
 * @author burning <www.codepie.net>
 * @version 2019.07.24
 */

const path = require('path')

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
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: babelOptions
      },
      {
        test: /\.(ts|tsx)?$/,
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
  }
}