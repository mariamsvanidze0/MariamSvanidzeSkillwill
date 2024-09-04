import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './TaskForm.module.css';

const TaskForm = ({ taskName, setTaskName, editingTask, addTask, editTask }) => {
  const [term, setTerm] = useState('');
  const [assignee, setAssignee] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (editingTask) {
      setTaskName(editingTask.name);
      setTerm(editingTask.term);
      setAssignee(editingTask.assignee);
      setAdditionalInfo(editingTask.additionalInfo);
    } else {
      setTaskName('');
      setTerm('');
      setAssignee('');
      setAdditionalInfo('');
    }
  }, [editingTask, setTaskName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      name: taskName,
      term,
      assignee,
      additionalInfo
    };
    if (editingTask) {
      editTask(task);
    } else {
      addTask(task);
    }
    navigate('/');
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        className={styles.taskInput}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Enter a task"
        required
      />
      <input
        type="text"
        value={term}
        className={styles.taskInput}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Enter term"
        required
      />
      <input
        type="text"
        value={assignee}
        className={styles.taskInput}
        onChange={(e) => setAssignee(e.target.value)}
        placeholder="Enter assignee"
        required
      />
      <textarea
        value={additionalInfo}
        className={styles.taskTextarea}
        onChange={(e) => setAdditionalInfo(e.target.value)}
        placeholder="Enter additional information"
      />
      <button type="submit" className={editingTask ? styles.editButton : styles.addButton}>
        {editingTask ? 'Edit Task' : 'Add Task'}
      </button>
    </form>
  );
};

export default TaskForm;
