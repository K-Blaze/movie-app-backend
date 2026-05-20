// import express
const express = require('express');

// create the application
const app = express();

// test route
app.get("/test", (req, res) => {
  res.send("Hello this is my test route!")
})

// create server on port 4000
app.listen(4000, () => {
  console.log("http://localhost:4000")
})