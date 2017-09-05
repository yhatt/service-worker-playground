const path = require('path')
const glob = require('glob')
const webpack = require('webpack')

require('dotenv').config()

const entries = glob.sync('./*/entry.js')
  .reduce((obj, fn) => ({
    ...obj,
    [path.join(fn, '../_dist/', path.basename(fn))]: fn,
  }), {})

const workers = glob.sync('./*/worker.js')
  .reduce((obj, fn) => ({
    ...obj,
    [path.join(fn, '../', `_${path.basename(fn, '.js')}.js`)]: fn,
  }), {})

let plugins = []

if (process.env.NODE_ENV !== 'production') {
  plugins.push(new webpack.EnvironmentPlugin(['VAPID_PUBLIC_KEY', 'VAPID_PRIVATE_KEY']))
}

module.exports = {
  devServer: {
    https: !!process.env.HTTPS,
    hot: false,
    inline: false,
    host: '127.0.0.1',
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
