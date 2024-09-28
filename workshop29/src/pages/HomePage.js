import React, { useState } from 'react';
import ColorPicker from '../components/ColorPicker';
import ColorDisplay from '../components/ColorDisplay';

const HomePage = () => {
  const [color, setColor] = useState('#ffffff');

  const handleColorChange = (selectedColor) => {
    setColor(selectedColor);
  };

  return (
    <div className="home-page">
      <ColorPicker onColorChange={handleColorChange} />
      <ColorDisplay color={color} />
    </div>
  );
};

export default HomePage;
