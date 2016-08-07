/*eslint-disable */

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, '..'),

  entry: [
    './src/scripts/index.js'
  ],

  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify({
        NODE_ENV: process.env.NODE_ENV || 'production'
      })
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: '../index.html',
      inject: 'body'
    })
  ],

  module: {
    loaders: [
      {
        test: /\.(ttf|eot|svg|woff2?)$/,
        include: /fonts/,
        loader: 'file-loader?name=[name]--[hash].[ext]'
      },
      {
        test: /\.png$/,
        loader: 'file-loader'
      },
      {
        test: /\.svg$/,
        exclude: /fonts/,
        loader: 'svg-sprite?' + JSON.stringify({
          name: '[name]_[hash]'
        })
      }
    ]
  },

  sassLoader: {
    data: "//@import 'globally available file';"
  },

  postcss: function () {
    return [require('autoprefixer')];
  },

  resolve: {
    alias: {
      app: path.resolve(__dirname, '../src/scripts/app')
    },
    modulesDirectories: [
      'node_modules'
    ],
    extensions: ['', '.js', '.jsx']
  }
};
