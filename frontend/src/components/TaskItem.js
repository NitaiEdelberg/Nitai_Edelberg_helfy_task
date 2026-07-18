import React from 'react';

function TaskItem({ task, onToggle, onDelete, onEdit }) {
  return (
    <div className={`task-item priority-${task.priority}`}>
      <h3 className={task.completed ? 'completed' : ''}>{task.title}</h3>
      <p>{task.description}</p>
      <span className="priority-badge">{task.priority}</span>

      <div className="task-actions">
        <button onClick={() => onToggle(task.id)}>
          {task.completed ? 'Mark Pending' : 'Mark Complete'}
        </button>
        <button onClick={() => onEdit(task)}>Edit</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TaskItem;