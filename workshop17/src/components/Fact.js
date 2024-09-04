import React from 'react';
import { useParams } from 'react-router-dom';
import styles from '../App.module.css'; 

const facts = {
  1: "Sherlock Holmes was originally going to be called Sherrinford.",
  2: "Holmes' famous phrase 'Elementary, my dear Watson' never actually appeared in Conan Doyle's stories.",
  3: "Holmes is based on a real doctor, Dr. Joseph Bell."
};

const Fact = () => {
  const { factId } = useParams();
  const fact = facts[factId];

  return (
    <div className={styles['fact-container']}>
      {fact ? <p className={styles['fact-text']}>{fact}</p> : <p className={styles['fact-text']}>Fact not found</p>}
    </div>
  );
};

export default Fact;
