const express = require("express");
const cors = require("cors");
const { getTasks, addTask, deleteTask } = require("./todo");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/tasks", (req, res) => {
  res.json(getTasks());
});

app.post("/tasks", (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: "Falta el título" });
  res.status(201).json(addTask(title));
});

app.delete("/tasks/:id", (req, res) => {
  const success = deleteTask(parseInt(req.params.id));
  if (!success) return res.status(404).json({ error: "Tarea no encontrada" });
  res.json({ success: true });
});

app.listen(3000, () => console.log("API running on port 3000"));