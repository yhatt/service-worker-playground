const path = require('path')
const glob = require('glob')

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

module.exports = {
  devServer: {
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
}
