import React from 'react';
import styles from '../App.module.css'; 

const NotFound = () => {
  return (
    <div className={styles['notfound-container']}>
      <h1 className={styles['notfound-title']}>404 - Page Not Found</h1>
    </div>
  );
};

export default NotFound;
