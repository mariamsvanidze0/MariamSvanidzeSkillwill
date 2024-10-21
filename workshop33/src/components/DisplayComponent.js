import styles from '../styles/DisplayComponent.module.css';

const DisplayComponent = ({ text }) => {
  return (
    <div className={styles.container}>
      <h1>{text}</h1>
    </div>
  );
};

export default DisplayComponent;
