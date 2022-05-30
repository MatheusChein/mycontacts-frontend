/* eslint-disable @typescript-eslint/no-non-null-assertion */
import ReactDOM from 'react-dom';

import { Button } from '../Button';
import { Container, Overlay, Footer } from './styles';

interface ModalProps {
  title: string;
  body: string;
  danger?: boolean;
}

export function Modal({ title, body, danger = false }: ModalProps) {
  return ReactDOM.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>{title}</h1>
        <p>{body}</p>

        <Footer>
          <Button type="button">Cancelar</Button>
          <Button danger={danger} type="button">
            Deletar
          </Button>
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById('modal-root')!,
  );
}
