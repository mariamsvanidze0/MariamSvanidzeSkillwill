import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Todo App</h1>
        <TaskInput />
        <TaskList />
      </div>
    </Provider>
  );
};

export default App;
