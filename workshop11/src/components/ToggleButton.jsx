import React from 'react';

const ToggleButton = ({ targetId }) => {
  const handleClick = () => {
    const info = document.getElementById(targetId);
    if (info.style.display === "none") {
      info.style.display = "block";
    } else {
      info.style.display = "none";
    }
  };

  return (
    <button onClick={handleClick}>
      Show Info
    </button>
  );
};

export default ToggleButton;
