import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Container,
  Header,
  InputSearchContainer,
  ListContainer,
} from './styles';
import arrow from '../../assets/images/icons/arrow.svg';
import { Contact, ContactData } from '../../components/Contact';

export function Home() {
  const [contacts, setContacts] = useState<ContactData[]>([]);
  const [contactsOrderBy, setContactsOrderBy] = useState<'asc' | 'desc'>('asc');

  useEffect(() => {
    fetch(`http://localhost:3001/contacts?orderBy=${contactsOrderBy}`)
      .then(response => response.json())
      .then(data => setContacts(data))
      .catch(err => console.log(err));
  }, [contactsOrderBy]);

  function handleToggleContactsOrderBy() {
    if (contactsOrderBy === 'asc') {
      setContactsOrderBy('desc');
      return;
    }
    setContactsOrderBy('asc');
  }

  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>

      <Header>
        <strong>
          {contacts.length}
          {contacts.length === 1 ? ' contato' : ' contatos'}
        </strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      <ListContainer contactsOrderBy={contactsOrderBy}>
        <header>
          <button type="button" onClick={handleToggleContactsOrderBy}>
            <span>Nome</span>
            <img src={arrow} alt="arrow-icon" />
          </button>
        </header>

        {contacts.map(({ id, name, email, phone, category_name }) => (
          <Contact
            key={id}
            id={id}
            name={name}
            email={email}
            phone={phone}
            category_name={category_name}
          />
        ))}
      </ListContainer>
    </Container>
  );
}
