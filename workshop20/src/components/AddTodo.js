import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';
import './AddTodo.css';

const AddTodo = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (task.trim()) {
      dispatch(addTodo(task));
      setTask('');
    }
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter your task..."
      />
      <button className="add-button" onClick={handleAddTodo}>
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
