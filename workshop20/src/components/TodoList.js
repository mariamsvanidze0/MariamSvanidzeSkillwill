import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../redux/actions';
import './TodoList.css';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <li key={index} className="todo-item">
          <span className={`todo-text ${todo.done ? 'done' : ''}`}>
            {todo.task}
          </span>
          <div className="todo-buttons">
            <button className="done-button" onClick={() => dispatch(toggleTodo(index))}>
              {todo.done ? 'Undo' : 'Done'}
            </button>
            <button className="delete-button" onClick={() => dispatch(removeTodo(index))}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
