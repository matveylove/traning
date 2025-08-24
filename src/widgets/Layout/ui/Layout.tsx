import React, { FC } from 'react';
import classes from './Layout.module.scss';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

export const Layout: FC = ({children}) => {
  return (
    <div className={classes.layout}>
      <Navbar />
      <div className={classes.main}>
        <Sidebar />
        {children}
      </div>
    </div>
  );
};
