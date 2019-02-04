'use strict';

const serverConfig = {
  target: 'node',
  entry: './src/server.ts',
  output: {
    path: __dirname,
    filename: 'node_helper.js',
    libraryTarget: 'commonjs2',
  },
  // watchOptions: {
  //   ignored: ['*.js', 'node_modules', 'dist', 'server/piblic']
  // },
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

if(process.argv.indexOf('--watch') >= 0) {
  serverConfig.watch = true;
}

module.exports = [serverConfig];