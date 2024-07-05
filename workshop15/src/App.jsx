import './App.css';
import useLocalStorage from './hooks/useLocalStorage';
import { useEffect } from 'react';
import useWindowResize from './hooks/useWindowResize';

function App() {
  const [isDarkMode, setIsDarkMode] = useLocalStorage('dark-mode', false);
  const { width } = useWindowResize();

  useEffect(() => {
    if (width >= 600) {
      document.body.className = isDarkMode ? 'dark-mode' : '';
    } else {
      document.body.className = '';
    }
  }, [isDarkMode, width]);

  const toggleTheme = () => {
    if (width >= 600) {
      setIsDarkMode(prevState => !prevState);
    }
  };

  return (
    <div>
      {width >= 600 && <button onClick={toggleTheme}>Toggle Theme</button>}
      <h1>{width >= 600 ? 'Try out Themes' : 'Theme is not available'}</h1>
    </div>
  );
}

export default App;
