const express = require('express')

const app = express();

app.get('/', (req, res) => {
  res.send("Hello there, Dean! I've been updated.");
})

app.listen(8080);
module.exports.getApp = app;