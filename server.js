const express = require('express')
var app = express();
app.use(express.json())
app.use(express.static('static'))

module.exports.app=app;