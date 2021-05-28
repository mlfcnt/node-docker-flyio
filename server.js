const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('hello');
});

app.get('/date', (req, res) => {
  const date = new Date().toLocaleString('fr');
  res.send(date);
});
app.get('/ea', (req, res) => {
  res.send('its in the game');
});

app.listen(port, () => console.log(`HelloNode app listening on port ${port}!`));
