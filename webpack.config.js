var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: path.resolve('./client/App.js'),
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
