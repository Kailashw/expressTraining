const express = require('express')
import { userRoutes } from "./routes/userRoutes";
import { customerRoutes } from "./routes/customerRoutes";
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('you are in home page now');
})

app.use(userRoutes);
app.use(customerRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})