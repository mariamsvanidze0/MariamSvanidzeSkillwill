import React from 'react';
import { Link } from 'react-router-dom';
import sherlockImage from '../assets/sherlock.webp'; 
import styles from '../App.module.css'; 

const Home = () => {
  return (
    <div className={styles['home-container']}>
      <h1 className={styles['home-title']}>Sherlock Holmes</h1>
      <img src={sherlockImage} alt="Sherlock Holmes" className={styles['home-image']} />
      <p><Link to="/about" className={styles['home-link']}>About Sherlock Holmes</Link></p>
    </div>
  );
};

export default Home;
