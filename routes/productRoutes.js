
import { data } from "../data";

export const productRoutes = (app ) => {
    app.get('/products', (req,res) => {
        // res.send(JSON.stringify(data),200);
        res.status(200).send(JSON.stringify(data))
    })
    
    app.get('/products/:id', (req,res) => {
        res.send(`Product ${req.params.id}`);
    })

    app.post('/products', (req,res) => {
        res.send(req.body);
    })

    app.put('/products/:id', (req,res) => {
        res.send(`Product ${req.params.id} created`);
    })

    app.patch('/products/:id', (req,res) => {
        res.send(`Product ${req.params.id} updated`);
    })

    app.delete('/products/:id', (req,res) => {
        res.send(`Product ${req.params.id} deleted`);
    })

    app.all('/products',(request,response)=>{
        response.send(`route Not found !!`)
    })
}