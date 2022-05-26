import { Container, Header, ListContainer } from './styles';
import arrow from '../../assets/images/icons/arrow.svg';
import { Contact } from '../Contact';

export function ContactsList() {
  return (
    <Container>
      <Header>
        <strong>3 contatos</strong>
        <a href="/">Novo contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="arrow-icon" />
          </button>
        </header>

        <Contact />
        <Contact />
        <Contact />
      </ListContainer>
    </Container>
  );
}
