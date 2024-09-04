import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasks/taskSlice';
import { nanoid } from '@reduxjs/toolkit';

const TaskInput: React.FC = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (name.trim()) {
      dispatch(addTask({ id: nanoid(), name, isCompleted: false }));
      setName('');
    }
  };

  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Add a new task"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Task</button>
    </div>
  );
};

export default TaskInput;
