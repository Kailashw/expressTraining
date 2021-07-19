
const express = require('express')
const app = express()

export const userRoutes = app.get('/users', (req, res) => {
    // will not authenticate
    res.send('in user route');
})