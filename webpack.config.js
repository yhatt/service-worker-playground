const path = require('path')
const glob = require('glob')

const entry = glob.sync('./*/entry.js').reduce((obj, fn) => ({
  ...obj,
  [path.join(fn, '../dist/', path.basename(fn))]: fn,
}), {})

module.exports = {
  entry,
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
