'use strict';

const serverConfig = {
  target: 'node',
  entry: './src/node_helper.ts',
  output: {
    path: __dirname,
    filename: 'node_helper.js',
    libraryTarget: 'commonjs2',
  },
  watchOptions: {
    ignored: ['*.js', 'node_modules', 'dist']
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'ts-loader'
    }]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  }
}

module.exports = [serverConfig];