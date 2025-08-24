import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from 'app/providers/ThemeProvider/lib/ThemeContext';

interface UseThemeResult {
  theme: Theme;
  setTheme: () => void;
}

export function useTheme(): UseThemeResult {
  const {theme, setTheme} = useContext(ThemeContext);

  const handleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme,
    setTheme: handleTheme,
  }
}