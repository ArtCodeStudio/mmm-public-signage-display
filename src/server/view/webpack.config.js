const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

/**
 * output errors on watch
 * @see https://stackoverflow.com/a/39142422/1465919
 */
class ConsoleNotifierPlugin {
  compilationDone(stats) {
    const log = (error) => {
      console.error(error.error ? error.error : error);
    };
    stats.compilation.errors.forEach(log);
  }

  apply(compiler) {
    compiler.plugin('done', this.compilationDone.bind(this));
  }
}

module.exports = {
  optimization: {
    minimizer: [new TerserPlugin({
      sourceMap: true,
      terserOptions: {
        ecma: undefined,
        warnings: true,
        parse: {},
        compress: {},
        mangle: true, // Note `mangle.properties` is `false` by default.
        module: false,
        output: {
          comments: false,
        },
        toplevel: false,
        nameCache: null,
        ie8: false,
        keep_classnames: undefined,
        keep_fnames: false,
        safari10: false,
      },
    })],
  },
  entry: {
    'app': './scripts/main.ts',
  },
  devtool: 'inline-source-map',
  output: {
    globalObject: 'self',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../../../server/public/scripts/'),
    publicPath: '/scripts/',
  },
  resolve: {
    modules: [ 'node_modules', 'src/modules' ],
    extensions: ['.ts', '.tsx', '.js', '.json'],
    symlinks: true
  },
  module: {
    rules: [
      // typescript and javascript
      {
        test: /\.(tsx?)|\.(js)$/,
        exclude: [/node_modules\/(?!@ribajs)/, /(bower_components)/],
        loader: 'babel-loader',
      },
      // html templates
      {
        test: /\.html$/,
        use: [ {
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }]
      },
      // pug templates
      {
        test: /\.pug$/,
        use: [ {
          loader: 'pug-loader',
          options: {
            minimize: true
          }
        }]
      },
    ]
  },
  plugins:  [
    new ConsoleNotifierPlugin(),
  ]
};