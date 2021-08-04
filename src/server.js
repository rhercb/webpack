const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.get('/hello-world/', function (req, res) {
  const pathToHtmlFile = path.resolve(__dirname, '../dist/hello-world.html');
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf8');
  res.send(contentFromHtmlFile);
});

app.get('/my-image/', function (req, res) {
  const pathToHtmlFile = path.resolve(__dirname, '../dist/my-image.html');
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf8');
  res.send(contentFromHtmlFile);
});

app.use('/static', express.static(path.resolve(__dirname, '../dist')));

app.listen(3000, function () {
  console.log('App is running');
});
