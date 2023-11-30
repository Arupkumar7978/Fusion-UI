export default interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | string;
  disabled?: boolean;
  backgroundColor?: string;
  setIcon?: {
    icon: React.ReactElement | JSX.Element | null;
    alignment?: 'left' | 'right';
  };
  size?: 'small' | 'medium' | 'large';
  // label?: string | React.ReactElement | JSX.Element | Element;
  error?: boolean;
  children: React.ReactNode;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}
