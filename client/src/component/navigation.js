import React, {useState} from 'react';
import useDarkMode from '../hooks/useDarkMode';

const Navigation = () => {
  // const [darkMode, setDarkMode] = useState(false);
  const [darkMode, setDarkMode] = useDarkMode(false)
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navigation">
      <h1>Women's World Cup</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navigation;