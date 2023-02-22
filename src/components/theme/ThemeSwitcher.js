import { useContext } from 'react';
import { ThemeContext, themeOptions } from './Theme';

function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      {Object.entries(themeOptions).map(([key, color]) => (
        <button
          style={{ backgroundColor: color }}
          onClick={() => setTheme(key)}
        >
          {key}
        </button>
      ))}
    </div>
  );
}

export default ThemeSwitcher;
