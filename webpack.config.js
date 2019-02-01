'use strict';

const clientConfig = {
  devtool: 'inline-source-map',
  entry: './src/module-control.ts',
  output: {
    path: __dirname,
    filename: "module-control.js",
},
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ]
},
  resolve: {
    extensions: [ '.ts', '.tsx', '.js' ]
  }
};

const serverConfig = {
  target: "node",
  entry: './src/node_helper.ts',
  output: {
    path: __dirname,
    filename: "node_helper.js",
    libraryTarget: "commonjs2",
},
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ]
},
  resolve: {
    extensions: [ '.ts', '.tsx', '.js' ]
  }
}

module.exports = [clientConfig, serverConfig];