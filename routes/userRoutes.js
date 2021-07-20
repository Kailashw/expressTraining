export const userRoutes = (app) => {
    app.get('/users', (req, res, next) => {
        //auth first
        if (!req.headers.token) {
            res.status(401).send('User not found')
        }
        res.status(200).send('User found')
        next()
    })

    app.get('/users/:name', (req, res, next) => {
        res.status(200).send(`Welcome ${req.params.name}!!`)
        next()
    })
}