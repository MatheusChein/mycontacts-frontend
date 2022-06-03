/* eslint-disable @typescript-eslint/no-non-null-assertion */
import ReactDOM from 'react-dom';
import { Overlay, LoaderCircle } from './styles';

interface LoaderProps {
  isLoading: boolean;
}

export function Loader({ isLoading }: LoaderProps) {
  if (!isLoading) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay>
      <LoaderCircle />
    </Overlay>,
    document.getElementById('loader-root')!,
  );
}
