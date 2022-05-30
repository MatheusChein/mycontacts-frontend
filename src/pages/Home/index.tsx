import { Link } from 'react-router-dom';
import {
  Container,
  Header,
  InputSearchContainer,
  ListContainer,
} from './styles';
import arrow from '../../assets/images/icons/arrow.svg';
import { Contact } from '../../components/Contact';

export function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo contato</Link>
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
