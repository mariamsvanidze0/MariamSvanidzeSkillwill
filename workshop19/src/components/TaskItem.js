import React from 'react';
import styles from './TaskItem.module.css';

const TaskItem = ({ task, toggleTaskCompletion, startEditingTask, deleteTask }) => {
  return (
    <li className={styles.taskItem}>
      <span
        className={task.isCompleted ? styles.completed : ''}
        onClick={() => toggleTaskCompletion(task)}
      >
        {task.name} - {task.term} - {task.assignee} - {task.additionalInfo}
      </span>
      <button className={styles.editButton} onClick={() => startEditingTask(task)}>Edit</button>
      <button className={styles.deleteButton} onClick={() => deleteTask(task._id)}>Delete</button>
    </li>
  );
};

export default TaskItem;
