const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
require("dotenv").config();

app.use(bodyParser.json());


mongoose.connect(
  "mongodb+srv://sfdesigns001:L4rvgze7QGb1Jh0z@cluster0.e2a3gjc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

const db = mongoose.connection;

db.on("error", (error) => {
  console.error(error);
});
db.once("open", () => {
  console.log("Database connected");
});

app.get("/test", (req, res) => {
  console.log("Hello World");

  res.json("Hello World");
});

app.listen(port, () => {
  console.log('conntion is :$port');
});
