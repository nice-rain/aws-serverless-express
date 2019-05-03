const serverless = require('serverless-http');
const express = require('express');
const app = express();

//Root get request/response
app.get('/express', function (req, res) {
  res.status(200).send('Hello World!')
});

module.exports.handler = serverless(app);