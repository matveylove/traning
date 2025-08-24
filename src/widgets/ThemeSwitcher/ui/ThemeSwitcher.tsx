import React from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { Button } from 'shared/ui/Button/Button';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import LightIcon from 'shared/assets/icons/light-theme.svg';
import DarkIcon from 'shared/assets/icons/dark-theme.svg';
import classes from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = () => {
  const {theme, setTheme} = useTheme();

  return (
    <Button onClick={ setTheme } className={classes.button}>
      Изменить тему
      {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
};