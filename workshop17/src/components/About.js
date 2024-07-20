import React from 'react';
import styles from '../App.module.css'; 
const About = () => {
  return (
    <div className={styles['about-container']}>
      <h1 className={styles['about-title']}>About Sherlock Holmes</h1>
      <p className={styles['about-text']}>
        Sherlock Holmes is a fictional private detective created by British author Sir Arthur Conan Doyle.
      </p>
    </div>
  );
};

export default About;
