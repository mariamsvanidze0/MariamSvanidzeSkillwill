import React from 'react';
import styles from './TaskForm.module.css';

const TaskForm = ({ taskName, setTaskName, editingTask, addTask, editTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingTask) {
      editTask();
    } else {
      addTask();
    }
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        className={styles.taskInput}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Enter a task"
      />
      <button type="submit" className={editingTask ? styles.editButton : styles.addButton}>
        {editingTask ? 'Edit Task' : 'Add Task'}
      </button>
    </form>
  );
};

export default TaskForm;
