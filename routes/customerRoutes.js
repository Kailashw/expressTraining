
const express = require('express')
const app = express()

const customerRoutes = app.get('/customers', (req, res) => {
    //auth first
    if(req.header.token){

    }
    res.send('user not found',401);
})

exports.customerRoutes = customerRoutes