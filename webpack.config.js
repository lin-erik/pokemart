var webpack = require('webpack');
var path = require('path');

var SRC_DIR = path.join(__dirname + '/client');

module.exports = {
  entry: `${SRC_DIR}/App.jsx`,
  output: {
    filename: 'bundle.js',
    path: path.resolve('./client/dist')
  },

  module: {
    rules: [{
      test: [/\.js$/, /\.jsx?$/],
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['env', 'react', 'stage-0']
      }
    }]
  },
  externals: {
    'react/addons': true, // important!!
    'react/lib/ReactContext': true,
    'react/lib/ExecutionEnvironment': true
  }
};
