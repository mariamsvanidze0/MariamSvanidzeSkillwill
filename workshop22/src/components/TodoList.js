import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../features/todos/todosSlice';

const TodoList = () => {
  const todos = useSelector(state => state.todos.items);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggle = (todo) => {
    dispatch(updateTodo({
      ...todo,
      completed: !todo.completed,
    }));
  };

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li key={todo.id} className={todo.completed ? 'completed' : ''}>
          <span onClick={() => handleToggle(todo)}>{todo.text}</span>
          <button onClick={() => handleDelete(todo.id)} className="btn delete-btn">Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
