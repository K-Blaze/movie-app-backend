// import express
const express = require('express');

// create the application
const app = express();

// get information from "/" which is root
app.get("/", (req, res) => {
  res.send("Hello this is my backend!!!!")
})

// create server on port 3000
app.listen(3000, () => {
  console.log("http://localhost:3000")
})