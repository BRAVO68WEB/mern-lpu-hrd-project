const express = require("express");
const bodyParser = require("body-parser");
const postRoutes = require("./routes/post");

const app = express();

app.use(bodyParser.json()); //Parses application/json data

app.use("/posts", postRoutes);

app.listen(8080);
