import React from 'react';

const ColorDisplay = ({ color }) => {
  return (
    <div className="color-display" style={{ backgroundColor: color }}>
      Selected Color: {color}
    </div>
  );
};

export default ColorDisplay;
