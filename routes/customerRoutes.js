export const customerRoutes = (app) => {
    app.get('/customers', (req, res, next) => {
        //auth first
        if (!req.headers.token) {
            res.status(401).send('customer not found')
        }
        res.status(200).send('customer found')
        next()
    })

    app.get('/customers/:name', (req, res) => {
        res.status(200).send(`Welcome ${req.params.name}!!`)
        next()
    })
}