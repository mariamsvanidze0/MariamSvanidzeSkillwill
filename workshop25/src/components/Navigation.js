import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/App.module.css';

function Navigation() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}

export default Navigation;
