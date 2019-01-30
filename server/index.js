require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const _ = require('underscore');
const massive = require("massive");

const prod = require(`${__dirname}/controllers/prodCtrl`);

const port = 3001;

const app = express();

// app.use(express.static(`${__dirname}/../build`));  // for production use

// Connect to database
massive(process.env.URI).then(db => {
    console.log('You have successfully connected to the database.')
    app.set('db', db);
}).catch(err => console.log(err))


app.use(bodyParser.json());
app.use(cors());

app.get("/users", (req, res) => {
    app
        .get("db")
        .getAllUsers()
        .then(users => {
            res.status(200).json(users);
        });
});

app.get("/api/products/:id", prod.getProd);
// app.get("/api/createUser", (req, res) => {
//     app
//         .get("db")
//         .createUser()
//         .then(response => {
//             res.status(200).json(response);
//         });
// });

// const path = require("path");  //for production use
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../build/index.html"));
// });

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});