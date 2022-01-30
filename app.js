const express = require('express');
const handlers = require('./handlers');

const app = express();

app.use(express.json());
app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

app.post('/temperature', handlers.postTemperature);

module.exports = app;
