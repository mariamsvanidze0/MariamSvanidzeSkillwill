import React from 'react';
import Navigation from './Navigation';
import styles from '../styles/App.module.css';

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Navigation />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
