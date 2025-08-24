import React from 'react';
import cls from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/ui/ThemeSwitcher';

export const Navbar = () => {
  return (
    <div className={classNames(cls.navbar, {}, [])}>
      <ThemeSwitcher />
      <div className={cls.right}>
        <AppLink to={ '/' }>Main page</AppLink>
        <AppLink to={ '/about' }>About page</AppLink>
      </div>
    </div>
  );
};
