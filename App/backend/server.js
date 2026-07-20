const express = require('express');
const app = express();
const port = 5000;

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
