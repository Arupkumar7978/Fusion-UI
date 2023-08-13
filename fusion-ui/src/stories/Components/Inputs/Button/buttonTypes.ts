export default interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  disabled?: boolean;
  backgroundColor?: string;
  setIcon?: {
    icon: React.ReactElement | JSX.Element | null;
    alignment?: 'left' | 'right';
  };
  size?: 'small' | 'medium' | 'large';
  label?: string | React.ReactElement | JSX.Element;
  error?: boolean;
  children?: React.ReactElement | JSX.Element | string;
  onClick?: () => void;
}
