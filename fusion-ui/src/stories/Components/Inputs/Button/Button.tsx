import React from 'react';
import './button.css';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  disabled?: boolean;
  backgroundColor?: string;
  setIcon?: {
    icon:
      | React.ReactElement
      | JSX.Element
      | HTMLElement
      | React.ReactNode
      | null;
    alignment?: 'left' | 'right';
  };
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

const Button = ({
  variant = 'primary',
  size = 'medium',
  backgroundColor = '',
  label,
  setIcon = {
    icon: null,
    alignment: 'left',
  },
  ...props
}: ButtonProps) => {
  console.log(variant);

  return (
    <button
      type="button"
      className={[
        'fusion-button',
        `fusion-button--${size}`,
        `fusion-button--${variant}`,
      ].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      <span
        className={`fusion-button--icon--${
          setIcon?.alignment ?? 'left'
        }`}
      >
        {setIcon &&
          React.isValidElement(setIcon?.icon) &&
          React.cloneElement(setIcon?.icon)}
      </span>
      {label}
    </button>
  );
};

export default Button;

