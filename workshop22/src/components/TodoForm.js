import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todos/todosSlice';

const TodoForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo({
        id: Date.now(),
        text,
        completed: false,
      }));
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new todo..."
        className="todo-input"
      />
      <button type="submit" className="btn">Add Todo</button>
    </form>
  );
};

export default TodoForm;
