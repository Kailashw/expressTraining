import { userRoutes } from "./routes/userRoutes";
import { customerRoutes } from "./routes/customerRoutes";
import { app } from "./server";
const port = 3000

app.get('/', (req, res) => {
    res.send('you are in home page now');
})

customerRoutes(app);
userRoutes(app);

app.use(userRoutes);
app.use(customerRoutes);

app.listen(port, () => {
  console.log(`===========================app listening at http://localhost:${port}===============`)
})