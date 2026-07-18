// handle create and update

import React, { useState, useEffect } from 'react';

function TaskForm({ onSubmit, editingTask, onUpdate, onCancelEdit }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('medium');

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setPriority(editingTask.priority);
    }
  }, [editingTask]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!title) {
      alert('Title is required');
      return;
    }

    const taskData = { title, description, priority };

    if (editingTask) {
      onUpdate(editingTask.id, taskData);
    } else {
      onSubmit(taskData);
    }

    setTitle('');
    setDescription('');
    setPriority('medium');
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <button type="submit">{editingTask ? 'Update Task' : 'Add Task'}</button>
      {editingTask && (
        <button type="button" onClick={onCancelEdit}>
          Cancel
        </button>
      )}
    </form>
  );
}

export default TaskForm;