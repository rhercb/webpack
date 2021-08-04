const path = require('path'); // Webpack path spraudnis
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/dashboard.js',
  output: {
    filename: '[name].[contenthash].js', // name tiek paņemt no entry point
    path: path.resolve(__dirname, './dist'),
    publicPath: 'http://localhost:9000/',
  },
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 5000,
      automaticNameDelimiter: '_',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            plugins: ['transform-class-properties'],
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'dashboard.html',
      title: 'Dashboard',
    }),
    new ModuleFederationPlugin({
      name: 'App',
      remotes: {
        HelloWorldApp: 'HelloWorldApp@http://localhost:9001/remoteEntry.js',
        MyImageApp: 'MyImageApp@http://localhost:9002/remoteEntry.js',
      },
    }),
  ],
};
