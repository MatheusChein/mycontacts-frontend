import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Spinner } from '../Spinner';
import { ButtonContainer } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  danger?: boolean;
  isLoading?: boolean;
}

export function Button({
  children,
  danger = false,
  isLoading = false,
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <ButtonContainer danger={danger} disabled={disabled || isLoading} {...rest}>
      {isLoading ? <Spinner size={16} /> : children}
    </ButtonContainer>
  );
}
