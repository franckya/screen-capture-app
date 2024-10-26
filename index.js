// index.js
const express = require('express');
const screenshot = require('node-webkit-screenshot');
const path = require('path');

const app = express();
const port = 3000;

app.get('/capture', (req, res) => {
  screenshot({ width: 1920, height: 1080 }).then((img) => {
    res.setHeader('Content-Type', 'image/png');
    res.send(img);
  }).catch(err => {
    console.error('Error capturing screen:', err);
    res.status(500).send('Error capturing screen');
  });
});

app.listen(port, () => {
  console.log(`Screen capture app listening at http://localhost:${port}`);
});
