import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext(null);

export const themeOptions = {
  default: '#282c34',
  blue: '#61dafb',
  green: '#98c379',
  purple: '#c678dd',
};

function ThemeProvider(props) {
  const [theme, setTheme] = useState('default');

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--color-background',
      themeOptions[theme],
    );
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
