import React from 'react';

function TaskFilter({ currentFilter, onFilterChange }) {
  return (
    <div className="task-filter">
      <button
        className={currentFilter === 'all' ? 'active' : ''}
        onClick={() => onFilterChange('all')}
      >
        All
      </button>
      <button
        className={currentFilter === 'pending' ? 'active' : ''}
        onClick={() => onFilterChange('pending')}
      >
        Pending
      </button>
      <button
        className={currentFilter === 'completed' ? 'active' : ''}
        onClick={() => onFilterChange('completed')}
      >
        Completed
      </button>
    </div>
  );
}

export default TaskFilter;