const express = require("express");

const config = require("./server/configure");
let app = express();

const port = process.env.PORT || 3000;
app.set("views", __dirname + "/views");

app = config(app);

const mongoose = require("mongoose");

const mongoDB = "mongodb://localhost/testDb";

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error"));

db.on("connected", () => {
  console.log("Database connected");
});

app.listen(port, function () {
  console.log("Server listen on port " + port);
});
