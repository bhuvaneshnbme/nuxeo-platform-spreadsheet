'use strict';

const path = require('path');
const del = require('del');
const merge = require('merge-stream');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './app/app.js',
  output: {
    filename: 'app-build.js',
    path: path.resolve(__dirname, 'spreadsheet-output')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: '> 0.25%, not dead',
                  },
                ],
              ],
            },
          },
        ],
      },
      {
        test: /\.(png|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'styles',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        path.join(__dirname, 'app-build.js'),
        path.join(__dirname, 'spreadsheet-output/**'),
      ],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'app/images/**/*',
          to: path.join(__dirname, 'spreadsheet-output/images/[name][ext]'),
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      filename: 'index.html',
      inject: 'body',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'app'),
    proxy: {
      '/nuxeo': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
};
