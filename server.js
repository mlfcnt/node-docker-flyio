const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get(['/', '/:name'], (req, res) => {
  greeting = '<h1>Hello From Node on Fly!</h1>';
  const name = req.params.name;
  if (name) {
    res.send(greeting + '<strong>and hello to </strong> ' + name);
  } else {
    res.send(greeting);
  }
});

app.listen(port, () => console.log(`HelloNode app listening on port ${port}!`));
