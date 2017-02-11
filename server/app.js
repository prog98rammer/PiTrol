const express = require('express');
const cors = require('cors');
const path = require("path");

const app = express();

app.use(cors());
app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get('/', (req, res) => {res.status(200).render("index.html");});

module.exports = app;
