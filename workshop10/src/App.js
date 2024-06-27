import React from 'react';
import './App.css';
import ProfileImage from './profile.jpg'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="hero-section">
          <img src={ProfileImage} className="profile-image" alt="profile" />
          <h1>Mariam Svanidze</h1>
          <h2>Junior Front-End Developer</h2>
        </div>
      </header>
      <section className="description">
        <p>
          Hi, I'm Mariam Svanidze. I specialize in building beautiful and functional web interfaces using the latest technologies.
          With a keen eye for detail and a passion for coding, I aim to create seamless user experiences.
        </p>
        <p>
          My skills include HTML, CSS, JavaScript, React, and responsive web design. I love solving problems and learning new things,
          and I am excited to contribute to impactful projects.
        </p>
      </section>
    </div>
  );
}

export default App;
