'use strict';
var path = require('path');
const clientConfig = {
  devtool: 'inline-source-map',
  entry: './src/module-control.ts',
  output: {
    path: __dirname,
    filename: 'module-control.js',
  },
  watchOptions: {
    ignored: ['*.js', 'node_modules', 'dist']
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'ts-loader',
    }]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  }
};

module.exports = [clientConfig];