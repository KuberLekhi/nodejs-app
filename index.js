const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Simple data generation route
app.get('/data', (req, res) => {
  const data = { temperature: Math.random() * 100, humidity: Math.random() * 100 };
  res.json(data);
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
