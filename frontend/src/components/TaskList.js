import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onToggle, onDelete, onEdit }) {
  if (tasks.length === 0) {
    return <p className="empty-message">No tasks yet. Add one above!</p>;
  }

  //duplicate the tasks to keep sliding after task (after testing) - https://blog.logto.io/css-only-infinite-scroll
  const carouselTasks = [...tasks, ...tasks];

  return (
    <div className="carousel-wrapper">
      <div className="carousel-track">
        {carouselTasks.map((task, index) => (
          <div className="carousel-slide" key={`${task.id}-${index}`}>
            <TaskItem
              task={task}
              onToggle={onToggle}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;