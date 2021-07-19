
const express = require('express')
const app = express()

const userRoutes = app.get('/users', (req, res) => {
    // will not authenticate
    res.send('in user route');
})

exports.userRoutes = userRoutes