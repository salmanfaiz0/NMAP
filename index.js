const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
require("dotenv").config();

app.use(bodyParser.json());


// db.on("error", (error) => {
//   console.error(error);
// });
// db.once("open", () => {
//   console.log("Database connected");
// });

app.get("/test", (req, res) => {
  console.log("Hello World");

  res.json("Hello World");
});

app.listen(port, () => {
  console.log('conntion is :$port');
});
