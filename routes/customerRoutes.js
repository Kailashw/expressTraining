
const express = require('express')
const app = express()

export const customerRoutes = app.get('/customers', (req, res) => {
    //auth first
    if(!req.headers.token){
        res.status(401).send('customer not found')
    }
    res.status(200).send('customer found')
})