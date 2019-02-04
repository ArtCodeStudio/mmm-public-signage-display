'use strict';
var path = require('path');
const clientConfig = {
  devtool: 'inline-source-map',
  entry: './src/client.ts',
  output: {
    path: __dirname,
    filename: 'mmm-public-signage-display.js',
  },
  // watchOptions: {
  //   ignored: ['*.js', 'node_modules', 'dist', 'server', 'src/server']
  // },
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


if(process.argv.indexOf('--watch') >= 0) {
  clientConfig.watch = true;
}


module.exports = [clientConfig];