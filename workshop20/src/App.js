import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Todo App</h1>
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
