import { app } from './server';
import { userRoutes } from "./routes/userRoutes";
import { productRoutes } from "./routes/productRoutes";
import path from "path";
import fs from "fs";
const port = 8080
import users from "./users.json";

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static/index.html'));
})

app.delete('/users', (req, res) => {
    const { id, name, age } = req.query
    var usersData;
    fs.readFile('users.json', function (err,data) {
        usersData = JSON.parse(data);
        if (id && usersData.find(el => el.id === Number(id))) {
            usersData = usersData.filter(user => user.id !== Number(id));
            fs.writeFile('users.json', JSON.stringify(usersData, null, 4), 'utf-8', function (err) {
                if (err) throw Error(err);
                res.status(200).send(`User with id: ${id} successfully deleted`);
            })
        } 
        else if (name && usersData.find(el => el.name === name) ){
            usersData = usersData.filter(user => user.name !== name);
            fs.writeFile('users.json', JSON.stringify(usersData, null, 4), 'utf-8', function (err) {
                if (err) throw Error(err);
                res.status(200).send(`User with name: ${name} successfully deleted`);
            })
        }
        else if (age && usersData.find(el => el.age === age) ){
            usersData = usersData.filter(user => user.age !== Number(age));
            fs.writeFile('users.json', JSON.stringify(usersData, null, 4), 'utf-8', function (err) {
                if (err) throw Error(err);
                res.status(200).send(`User with age: ${age} successfully deleted`);
            })
        }
        else {
            res.status(500).send(`user with given property ${JSON.stringify({id,name,age})} not found.`);
        }
    })
   
})

productRoutes(app);
userRoutes(app);

app.use(userRoutes);
app.use(productRoutes);

app.get('*', (request, response) => {
    response.send(`${request.params['0'].split("/")[1].toUpperCase()} route Not found !!`)
})

app.listen(port, () => {
    console.log(`My app is running at http://localhost:${port}`)
})