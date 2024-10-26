// index.js
const express = require('express');
const puppeteer = require('puppeteer');

const app = express();
const port = 3000;

app.get('/capture', async (req, res) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://example.com'); // Or any URL you want to capture

    const screenshot = await page.screenshot();
    await browser.close();

    res.setHeader('Content-Type', 'image/png');
    res.send(screenshot);
  } catch (err) {
    console.error('Error capturing screen:', err);
    res.status(500).send('Error capturing screen');
  }
});

app.listen(port, () => {
  console.log(`Screen capture app listening at http://localhost:${port}`);
});

