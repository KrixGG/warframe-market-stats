// index.js
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(cors()); // Enable CORS

app.get('/api/stats', async (req, res) => {
  try {
    const response = await fetch('https://api.warframe.market/v1/items/akbolto_prime_set/statistics', {
      headers: {
        "Authorization": `Bearer ${process.env.WF_TOKEN}`, // Token from env variable
        "Platform": "pc",
        "Language": "en"
      }
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "API request failed" });
  }
});

module.exports = app;