import { SelectHTMLAttributes } from 'react';
import { SelectContainer } from './styles';

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

export function Select(props: SelectProps) {
  return <SelectContainer {...props} />;
}
