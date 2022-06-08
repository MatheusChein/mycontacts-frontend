/* eslint-disable @typescript-eslint/no-non-null-assertion */
import ReactDOM from 'react-dom';
import { Spinner } from '../Spinner';
import { Overlay } from './styles';

interface LoaderProps {
  isLoading: boolean;
}

export function Loader({ isLoading }: LoaderProps) {
  if (!isLoading) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay>
      <Spinner size={90} />
    </Overlay>,
    document.getElementById('loader-root')!,
  );
}
