import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import styles from './App.module.css';

const API_KEY = '7b_TaugXgXOVirMOi2UohhiUdaTKn4y_hO5hjc-KA7xavHZVtQ';
const BASE_URL = 'https://crudapi.co.uk/api/v1/tasks';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [editingTask, setEditingTask] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(BASE_URL, {
        headers: { 'Authorization': `Bearer ${API_KEY}` }
      });
      if (Array.isArray(response.data)) {
        setTasks(response.data);
      } else {
        console.error('API response is not an array:', response.data);
        setTasks([]);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching tasks', error);
      setTasks([]);
      setLoading(false);
    }
  };

  const addTask = async () => {
    if (!taskName) return;
    try {
      const response = await axios.post(BASE_URL, {
        name: taskName,
        isCompleted: false
      }, {
        headers: { 'Authorization': `Bearer ${API_KEY}` }
      });
      setTasks([...tasks, response.data]);
      setTaskName('');
    } catch (error) {
      console.error('Error adding task', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/${id}`, {
        headers: { 'Authorization': `Bearer ${API_KEY}` }
      });
      setTasks(tasks.filter(task => task._id !== id));
    } catch (error) {
      console.error('Error deleting task', error);
    }
  };

  const toggleTaskCompletion = async (task) => {
    try {
      const updatedTask = { ...task, isCompleted: !task.isCompleted };
      await axios.put(`${BASE_URL}/${task._id}`, updatedTask, {
        headers: { 'Authorization': `Bearer ${API_KEY}` }
      });
      setTasks(tasks.map(t => t._id === task._id ? updatedTask : t));
    } catch (error) {
      console.error('Error updating task', error);
    }
  };

  const startEditingTask = (task) => {
    setEditingTask(task);
    setTaskName(task.name);
  };

  const editTask = async () => {
    if (!taskName || !editingTask) return;
    try {
      const updatedTask = { ...editingTask, name: taskName };
      await axios.put(`${BASE_URL}/${editingTask._id}`, updatedTask, {
        headers: { 'Authorization': `Bearer ${API_KEY}` }
      });
      setTasks(tasks.map(t => t._id === editingTask._id ? updatedTask : t));
      setEditingTask(null);
      setTaskName('');
    } catch (error) {
      console.error('Error editing task', error);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className={styles.appContainer}>
      <h1 className={styles.appTitle}>TODO Application</h1>
      <TaskForm 
        taskName={taskName}
        setTaskName={setTaskName}
        editingTask={editingTask}
        addTask={addTask}
        editTask={editTask}
      />
      <TaskList 
        tasks={tasks}
        toggleTaskCompletion={toggleTaskCompletion}
        startEditingTask={startEditingTask}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default App;
