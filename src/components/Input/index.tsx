import { InputHTMLAttributes } from 'react';
import { InputContainer } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export function Input({ error, ...rest }: InputProps) {
  return <InputContainer error={error} {...rest} />;
}
