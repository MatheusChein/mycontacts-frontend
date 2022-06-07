import { Link } from 'react-router-dom';
import { ChangeEvent, useEffect, useMemo, useState } from 'react';

import ContactsService from '../../services/ContactsService';

import { Contact, ContactData } from '../../components/Contact';
import { Loader } from '../../components/Loader';

import {
  Container,
  Header,
  InputSearchContainer,
  ListContainer,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import { APIError } from '../../errors/APIError';

type OrderBy = 'asc' | 'desc';

export function Home() {
  const [contacts, setContacts] = useState<ContactData[]>([]);
  const [contactsOrderBy, setContactsOrderBy] = useState<OrderBy>('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const filteredContacts = useMemo(
    () =>
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    [searchTerm, contacts],
  );

  useEffect(() => {
    async function loadContacts() {
      try {
        setIsLoading(true);

        const contactsList = await ContactsService.listContacts(
          contactsOrderBy,
        );

        setContacts(contactsList);
      } catch (error) {
        if (error instanceof APIError) {
          // erro da API - mostrar mensagem para user
          console.log('Name', error.name);
          console.log('Message', error.message);
        } else {
          // erro do javascript - mostrar mensagem para user
          // enviar os dados do erro para um serviço de log
          console.log(error);
        }
      } finally {
        setIsLoading(false);
      }
    }

    loadContacts();
  }, [contactsOrderBy]);

  function handleToggleContactsOrderBy() {
    if (contactsOrderBy === 'asc') {
      setContactsOrderBy('desc');
      return;
    }
    setContactsOrderBy('asc');
  }

  function handleSearchTermChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />
      <InputSearchContainer>
        <input
          type="text"
          placeholder="Pesquisar contato..."
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </InputSearchContainer>

      <Header>
        <strong>
          {filteredContacts.length}
          {filteredContacts.length === 1 ? ' contato' : ' contatos'}
        </strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      <ListContainer contactsOrderBy={contactsOrderBy}>
        {filteredContacts.length > 0 && (
          <header>
            <button type="button" onClick={handleToggleContactsOrderBy}>
              <span>Nome</span>
              <img src={arrow} alt="arrow-icon" />
            </button>
          </header>
        )}

        {filteredContacts.map(({ id, name, email, phone, category_name }) => (
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
