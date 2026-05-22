// backend/todo.js
let tasks = [
  { id: 1, title: "Aprender GitHub Actions", done: false },
  { id: 2, title: "Practicar Node.js APIs", done: true }
];

function getTasks() {
  return tasks;
}

function addTask(title) {
  const newTask = { id: tasks.length + 1, title, done: false };
  tasks.push(newTask);
  return newTask;
}

function deleteTask(id) {
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) return false;
  tasks.splice(index, 1);
  return true;
}

module.exports = { getTasks, addTask, deleteTask };