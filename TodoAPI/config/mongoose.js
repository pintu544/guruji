const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://pintukumar:jvpp34btuf@cluster0.ss3rpdx.mongodb.net/test"
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error conection on mongodb"));

db.once("open", function () {
  console.log("Connected to database :: MongoDB");
});

module.exports = db;
