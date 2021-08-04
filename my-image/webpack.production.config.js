const path = require('path'); // Webpack path spraudnis
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/image.js',
  output: {
    filename: '[name].[contenthash].js', // name tiek paņemt no entry point
    path: path.resolve(__dirname, './dist'),
    publicPath: '/static',
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
      // Vairāki rulles, kā ieimportēt failu priekš webpack
      {
        test: /\.(png|jpg)$/, // Kādiem failiem tas ir jāizmanto
        use: ['file-loader'], // Kādu loader jāizmanto
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
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
      {
        test: /\.hbs$/,
        use: ['handlebars-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'my-image.html',
      title: 'Hello world',
      template: 'src/page-template.hbs',
    }),
    new ModuleFederationPlugin({
      name: 'MyImage', // App name
      remotes: {
        // Kurus failus jeb exposes no cita projekta izmantot/iekļaut
        HelloWorldApp: 'HelloWorldApp@http://localhost:9001/remoteEnty.js',
      },
    }),
  ],
};
