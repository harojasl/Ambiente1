// server.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let tasks = [
  { id: 1, task: "Aprender Node.js" },
  { id: 2, task: "Configurar GitHub Actions" }
];

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  const newTask = { id: tasks.length + 1, task: req.body.task };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.listen(3000, () => {
  console.log("API running on port 3000");
});