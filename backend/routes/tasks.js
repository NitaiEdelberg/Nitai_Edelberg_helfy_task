const express = require('express');
const router = express.Router();


let tasks = []; //if I had more time I'll save it as a Map to save time in actions.
let nextId = 1; // this should be hash , for cuncorrsy


router.get('/', (req, res) => {
  res.json(tasks);
});

router.post('/', (req, res) => {
  const { title, description, priority } = req.body;
  
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }

  const priorities = ['low', 'medium', 'high'];
  let taskPriority = 'medium';
  if (priorities.includes(priority)) {
    taskPriority = priority;
    }
    
  const newTask = {
    id: nextId++,
    title: title,
    description: description || '',
    completed: false,
    createdAt: new Date(),
    priority: taskPriority
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  tasks = tasks.filter(t => t.id !== id);
  res.status(204).send();
});

router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  const { title, description, priority, completed } = req.body;

  if (title !== undefined) task.title = title;
  if (description !== undefined) task.description = description;
  if (priority !== undefined) task.priority = priority;
  if (completed !== undefined) task.completed = completed;

  res.json(task);
});

router.patch('/:id/toggle', (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  task.completed = !task.completed;
  res.json(task);
});

module.exports = router;

