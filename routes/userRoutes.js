export const userRoutes = (app) => {
    app.get('/users', (req,res) => {
        res.send('Hello users');
    })
    
    app.get('/users/:name', (req,res) => {
        res.send(`Hello ${req.params.name}`);
    })
}

