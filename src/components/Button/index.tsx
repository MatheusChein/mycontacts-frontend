import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ButtonContainer } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  danger?: boolean;
}

export function Button({ children, danger = false, ...rest }: ButtonProps) {
  return (
    <ButtonContainer danger={danger} {...rest}>
      {children}
    </ButtonContainer>
  );
}
