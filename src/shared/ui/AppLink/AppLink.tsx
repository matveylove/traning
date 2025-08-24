import React, { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

interface AppLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {className, children, to, ...otherProps} = props;

  return (
    <Link
      to={to}
      {...otherProps}
      className={classNames(cls.appLink, {}, [className])}
    >{children}</Link>
  );
};
