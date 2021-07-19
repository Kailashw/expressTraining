const express = require('express')
const { customerRoutes } = require('./routes/customerRoutes')
const { userRoutes } = require('./routes/userRoutes')
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