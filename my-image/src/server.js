const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.get('/', function (req, res) {
  const pathToHtmlFile = path.resolve(__dirname, '../dist/my-image.html');
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf8');
  res.send(contentFromHtmlFile);
});

app.use('/', express.static(path.resolve(__dirname, '../dist')));

app.listen(9002, function () {
  console.log('App is running');
});
