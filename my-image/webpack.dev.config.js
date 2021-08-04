const path = require('path'); // Webpack path spraudnis
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/image.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '',
  },
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    index: 'my-image.html',
    port: 9002,
    writeToDisk: true,
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
        use: ['style-loader', 'css-loader', 'sass-loader'],
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
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'my-image.html',
      title: 'My image',
      template: 'src/page-template.hbs',
    }),
  ],
};
