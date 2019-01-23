require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const _ = require('underscore');
const massive = require("massive");

const array = ['item1', 'item2', 'item3', 'item4']

const port = 3001;

const app = express();

// app.use(express.static(`${__dirname}/../build`));  // for production use

// Connect to database
massive({
    host: process.env.HOST,
    port: process.env.PORT,
    database: process.env.DATABASE,
    user: process.env.USERID,
    password: process.env.PASSWORD,
    ssl: process.env.SSL,
    port: process.env.PORT
})
    .then(db => {
        // console.log(db);
        app.set("db", db);
    })
    .catch(console.log)


app.use(bodyParser.json());
app.use(cors());

//get random item
app.get('/random', (req, res) => res.send(_.sample(array)))

//return all items
app.get('/all', (req, res) => res.send(array))

app.get("/api/users", (req, res) => {
    app
        .get("db")
        .getAllUsers()
        .then(response => {
            res.status(200).json(response);
        });
});

app.get("/api/createUser", (req, res) => {
    app
        .get("db")
        .createUser()
        .then(response => {
            res.status(200).json(response);
        });
});

// const path = require("path");  //for production use
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../build/index.html"));
// });

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});