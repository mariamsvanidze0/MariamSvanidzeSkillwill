import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import ThemeToggle from './components/ThemeToggle';
import { fetchTodos } from './features/todos/todosThunks';
import './App.css';

function App() {
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className={`app ${theme}`}>
      <header>
        <h1>Todo List</h1>
        <ThemeToggle />
      </header>
      <main>
        <TodoForm />
        <TodoList />
      </main>
    </div>
  );
}

export default App;
