const path = require('path')

module.exports = {
  target: 'web',
  mode: 'development',
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, './add-on/index.js'),
  output: {
    path: path.resolve(__dirname, './add-on/'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      dgram: 'chrome-dgram'
    }
  }
}
