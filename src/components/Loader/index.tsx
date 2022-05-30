/* eslint-disable @typescript-eslint/no-non-null-assertion */
import ReactDOM from 'react-dom';
import { Overlay, LoaderCircle } from './styles';

export function Loader() {
  return ReactDOM.createPortal(
    <Overlay>
      <LoaderCircle />
    </Overlay>,
    document.getElementById('loader-root')!,
  );
}
