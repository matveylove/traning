import React, { useState } from 'react';
import classes from './Sidebar.module.scss';
import { Button } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState<boolean>(true);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  }
  const textButton = collapsed ? 'Свернуть' : 'Р';

  return (
    <div className={classNames(classes.sidebar, {[classes.collapsed]: collapsed}, [])}>
      <Button onClick={handleCollapse}>{ textButton }</Button>
    </div>
  );
};
