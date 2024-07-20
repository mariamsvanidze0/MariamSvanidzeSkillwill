import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <Link to="/">Home</Link>
      <Link to="/add">Add Task</Link>
    </nav>
  );
};

export default Navigation;
