import users from "../users.json";

export const userRoutes = (app) => {

    app.get('/users', (req,res, next) => {
        res.send(users);
        next();
    })

    app.get('/users/:name', (req,res, next) => {
        const user= users.find(el=> String(el.username.toLowerCase()) == String(req.params.name.toLowerCase()));
        res.send(user);
        next();
    })

    app.post('/users', (req,res, next) => {
        res.send(req.body);
        next();
    })
    
}
