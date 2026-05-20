import express from "express";
import fs from "fs";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello this is my backend!!!!");
});

app.get("/test", (req, res) => {
  res.send("Hello this is my test route!");
});

app.get("/users", (req, res) => {
  const data = fs.readFileSync("./users.json", "utf8");
  const users = JSON.parse(data);
  res.json(users);
});

app.delete("/users/:username", (req, res) => {
  const { username } = req.params;
  const data = fs.readFileSync("./users.json", "utf8");
  let users = JSON.parse(data);
  const userExists = users.some((u: any) => u.username === username);
  if (!userExists) {
    return res.status(404).json({ message: `User '${username}' not found` });
  }
  users = users.filter((u: any) => u.username !== username);
  fs.writeFileSync("./users.json", JSON.stringify(users, null, 2));
  res.json({ message: `User '${username}' deleted successfully` });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
