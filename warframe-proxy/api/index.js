// index.js
import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

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

export default app;