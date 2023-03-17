const path = require('path');

module.exports = {
  mode: 'production',
  resolve: {
    alias: {
      'babel-core': path.resolve(__dirname, 'node_modules/babel-core'),
      'babel': path.resolve(__dirname, 'node_modules/babel'),
      'typescript': path.resolve(__dirname, 'node_modules/typescript'),
      'minimatch': path.resolve(__dirname, 'node_modules/minimatch'),
    },
  },
  entry: {
    vendor: [
      'jquery',
      'jquery-ui',
      'handsontable',
      'select2',
      'nuxeo',
      'traceur',
      'es6-module-loader',
      'systemjs'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /app\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
