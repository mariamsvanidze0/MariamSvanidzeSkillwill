import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../features/theme/themeSlice';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme);

  return (
    <button onClick={() => dispatch(toggleTheme())} className="btn toggle-btn">
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default ThemeToggle;
