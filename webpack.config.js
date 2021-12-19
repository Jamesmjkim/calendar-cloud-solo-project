const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const mode = process.env.NODE_ENV;

module.exports = {
  mode: mode,
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/react'],
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development Calendar',
      template: './client/index.html',
      cache: false,
    }),
    new Dotenv(),
  ],
  devServer: {
    static: {
      publicPath: '/build',
      //   directory: path.resolve(__dirname, './build'),
    },
    historyApiFallback: true,
    hot: true,
  },
};
