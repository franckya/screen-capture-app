// index.js
const express = require('express');
const puppeteer = require('puppeteer');

const app = express();
const port = 3000;

// Root route to provide information
app.get('/', (req, res) => {
  res.send('Welcome to the Screen Capture App! Use /capture to capture the screen.');
});

// Capture route to take a screenshot
app.get('/capture', async (req, res) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Open any URL for capture; change as needed
    await page.goto('https://example.com'); 

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
