import React from 'react';
import TaskItem from './TaskItem';
import styles from './TaskList.module.css';

const TaskList = ({ tasks, toggleTaskCompletion, startEditingTask, deleteTask }) => {
  if (!Array.isArray(tasks)) {
    console.error('tasks is not an array:', tasks);
    return null;
  }
  
  return (
    <ul className={styles.taskList}>
      {tasks.map(task => (
        <TaskItem 
          key={task._id}
          task={task}
          toggleTaskCompletion={toggleTaskCompletion}
          startEditingTask={startEditingTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
