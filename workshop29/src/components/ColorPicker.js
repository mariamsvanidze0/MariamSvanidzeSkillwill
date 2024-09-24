import React, { useState } from 'react';

const ColorPicker = ({ onColorChange }) => {
  const [color, setColor] = useState('#ffffff');

  const handleColorChange = (event) => {
    setColor(event.target.value);
    onColorChange(event.target.value);
  };

  return (
    <div className="color-picker">
      <input
        type="color"
        value={color}
        onChange={handleColorChange}
      />
    </div>
  );
};

export default ColorPicker;
