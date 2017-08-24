const path = require('path')
const glob = require('glob')
const webpack = require('webpack')

require('dotenv').config()

const entries = glob.sync('./*/entry.js')
  .reduce((obj, fn) => ({
    ...obj,
    [path.join(fn, '../dist/', path.basename(fn))]: fn,
  }), {})

const workers = glob.sync('./*/worker.js')
  .reduce((obj, fn) => ({
    ...obj,
    [path.join(fn, '../', `${path.basename(fn, '.js')}-compiled.js`)]: fn,
  }), {})

const plugins = [
  new webpack.EnvironmentPlugin(['VAPID_PUBLIC_KEY', 'VAPID_PRIVATE_KEY']),
]

module.exports = {
  devServer: {
    https: !!process.env.HTTPS,
    hot: false,
    inline: false,
  },
  entry: { ...entries, ...workers },
  output: {
    path: __dirname,
    filename: '[name]',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] },
    ],
  },
  plugins,
}
