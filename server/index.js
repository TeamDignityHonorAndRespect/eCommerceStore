require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var _ = require('underscore');

const array = ['item1', 'item2', 'item3', 'item4']

const port = 3001;

const app = express();

app.use(express.static(`${__dirname}/../build`));

app.use(bodyParser.json());
app.use(cors());

app.get('/random', (req, res) => res.send(_.sample(array)))

// const path = require("path");
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../build/index.html"));
// });

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});