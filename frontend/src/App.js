import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskFilter from './components/TaskFilter';
import { getTasks, createTask, updateTask, deleteTask, toggleTask } from './services/api';
import './styles/App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    getTasks().then(data => setTasks(data));
  }, []);

  async function handleAddTask(taskData) {
    const newTask = await createTask(taskData);
    setTasks([...tasks, newTask]);
  }

  async function handleUpdateTask(id, updates) {
    const updated = await updateTask(id, updates);
    setTasks(tasks.map(t => (t.id === id ? updated : t)));
    setEditingTask(null);
  }

  async function handleDeleteTask(id) {
    const confirmed = window.confirm('Delete this task?');
    if (!confirmed) return;
    await deleteTask(id);
    setTasks(tasks.filter(t => t.id !== id));
  }

  async function handleToggleTask(id) {
    const updated = await toggleTask(id);
    setTasks(tasks.map(t => (t.id === id ? updated : t)));
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <div className="app">
      <h1>Task Manager</h1>

      <TaskForm
        onSubmit={handleAddTask}
        editingTask={editingTask}
        onUpdate={handleUpdateTask}
        onCancelEdit={() => setEditingTask(null)}
      />

      <TaskFilter currentFilter={filter} onFilterChange={setFilter} />

      <TaskList
        tasks={filteredTasks}
        onToggle={handleToggleTask}
        onDelete={handleDeleteTask}
        onEdit={setEditingTask}
      />
    </div>
  );
}

export default App;