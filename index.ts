import express from "express";
const app = express();
const port = 3000;

// root route
app.get("/", (req, res) => {
  res.send("Hello this is my backend!!!!")
})

// test route
app.get("/test", (req, res) => {
  res.send("Hello this is my test route!")
})

// create server on port 3000
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})