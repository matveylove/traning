import { useContext, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme } from './ThemeContext';
import { ThemeContext } from './ThemeContext';

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