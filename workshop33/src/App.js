import React from 'react';
import useCustomHook from './components/CustomHook';
import DisplayComponent from './components/DisplayComponent';
import FormComponent from './components/FormComponent';

function App() {
  const [value, increment] = useCustomHook(0);

  const handleFormSubmit = (input) => {
    console.log('Form submitted with:', input);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <DisplayComponent text={`Current value: ${value}`} />
      <button 
        onClick={increment}
        style={{
          backgroundColor: '#48bb78',
          color: '#fff',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginBottom: '20px',
          fontSize: '16px',
        }}
      >
        Increment
      </button>
      <FormComponent onSubmit={handleFormSubmit} />
    </div>
  );
}

export default App;
