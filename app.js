import { app } from './server';
import { userRoutes } from "./routes/userRoutes";
import { productRoutes } from "./routes/productRoutes";
const port = 3000

app.get('/', (req,res) => {
    res.send('you are in home page now');
})

productRoutes(app);
userRoutes(app);

app.use(userRoutes);
app.use(productRoutes);

app.get('*',(request,response)=>{
    response.send(`${request.params['0'].split("/")[1].toUpperCase()} route Not found !!`)
})

app.listen(port, () => {
    console.log(`My app is running at http://localhost:${port}`)
})