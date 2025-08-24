import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  states?: Record<string, string | boolean>;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    states,
    ...otherProps
  } = props;

  return (
    <button
      className={classNames(cls.button, states ? states : {}, [className])}
      {...otherProps}
    >
      {children}
    </button>
  );
};