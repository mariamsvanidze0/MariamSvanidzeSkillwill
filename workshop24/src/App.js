import React, { useState, Suspense } from 'react';
import './App.css';
import FilterableList from './components/FilterableList';
import EmailForm from './components/EmailForm';

const HeavyComponent = React.lazy(() => import('./components/HeavyComponent'));

function App() {
  const [loadHeavy, setLoadHeavy] = useState(false);

  const handleClick = () => {
    setLoadHeavy(true);
  };

  return (
    <div className="container">
      <h1>Lazy Loading Example</h1>
      <button onClick={handleClick}>Load Heavy Component</button>
      <Suspense fallback={<div>Loading...</div>}>
        {loadHeavy && <HeavyComponent />}
      </Suspense>

      <h2>Filterable List with Transition</h2>
      <FilterableList />

      <h2>Email Forms</h2>
      <EmailForm />
      <EmailForm />
      <EmailForm />
    </div>
  );
}

export default App;
