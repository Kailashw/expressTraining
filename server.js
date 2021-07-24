const express = require('express')
var app = express();
app.use(express.json())
app.use(express.static('static'))

process.on('uncaughtException', function(err) {
    console.log("Uncaught exception!", err);
    process.exit();
});

module.exports.app=app;