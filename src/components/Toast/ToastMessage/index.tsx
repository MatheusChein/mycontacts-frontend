import { Container } from './styles';

import xCircle from '../../../assets/images/icons/x-circle.svg';
import checkCircle from '../../../assets/images/icons/check-circle.svg';

interface ToastMessageProps {
  text: string;
  type?: 'danger' | 'success' | 'default';
}

export function ToastMessage({ text, type = 'default' }: ToastMessageProps) {
  return (
    <Container type={type}>
      {type === 'danger' && <img src={xCircle} alt="x-circle-icon" />}
      {type === 'success' && <img src={checkCircle} alt="check-circle-icon" />}
      <strong>{text}</strong>
    </Container>
  );
}
