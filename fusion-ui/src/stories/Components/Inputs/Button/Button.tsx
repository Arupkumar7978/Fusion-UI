import React, { cloneElement } from 'react';
import './button.css';
import ButtonProps from './buttonTypes';
import clsx from 'clsx';

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  backgroundColor = '',
  label,
  setIcon = {
    icon: null,
    alignment: 'left'
  },
  error = false,
  ...props
}: ButtonProps) => {
  const ICON =
    setIcon?.icon && cloneElement(setIcon?.icon, { className: '' });

  return (
    <button
      type="button"
      className={clsx(
        'fusion-button',
        `fusion-button--${size}`,
        `fusion-button--${variant}`,
        `fusion-button-icon-alignment-${setIcon.alignment}`,
        { [`fusion-error-state`]: error }
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {setIcon?.icon && (
        <span
          className={`fusion-button--icon--${setIcon?.alignment}`}
        > 
          {ICON}
        </span>
      )}
      {children || label}
    </button>
  );
};

export default Button;
