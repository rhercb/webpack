const path = require('path'); // Webpack path spraudnis

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  mode: 'none',
  module: {
    rules: [
      // Vairāki rulles, kā ieimportēt failu priekš webpack
      {
        test: /\.(png|jpg)$/, // Kādiem failiem tas ir jāizmanto
        use: ['file-loader'], // Kādu loader jāizmanto
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
