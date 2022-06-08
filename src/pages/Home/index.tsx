/* eslint-disable no-nested-ternary */
import { Link } from 'react-router-dom';
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';

import ContactsService from '../../services/ContactsService';

import { Contact, ContactData } from '../../components/Contact';
import { Loader } from '../../components/Loader';
import { Button } from '../../components/Button';

import {
  Container,
  Header,
  InputSearchContainer,
  ListContainer,
  ErrorContainer,
  EmptyListContainer,
  SearchNotFoundContainer,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import sad from '../../assets/images/sad.svg';
import emptyBox from '../../assets/images/empty-box.svg';
import magnifierQuestion from '../../assets/images/magnifier-question.svg';

type OrderBy = 'asc' | 'desc';

export function Home() {
  const [contacts, setContacts] = useState<ContactData[]>([]);
  const [contactsOrderBy, setContactsOrderBy] = useState<OrderBy>('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const filteredContacts = useMemo(
    () =>
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    [searchTerm, contacts],
  );

  const loadContacts = useCallback(async () => {
    try {
      setIsLoading(true);

      const contactsList = await ContactsService.listContacts(contactsOrderBy);

      setContacts(contactsList);
      setHasError(false);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [contactsOrderBy]);

  useEffect(() => {
    loadContacts();
  }, [contactsOrderBy, loadContacts]);

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

  function handleTryAgain() {
    loadContacts();
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />
      {!hasError && contacts.length > 0 && (
        <InputSearchContainer>
          <input
            type="text"
            placeholder="Pesquisar contato..."
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
        </InputSearchContainer>
      )}

      <Header
        justifyContent={
          hasError
            ? 'flex-end'
            : contacts.length > 0
            ? 'space-between'
            : 'center'
        }
      >
        {!hasError && contacts.length > 0 && (
          <strong>
            {filteredContacts.length}
            {filteredContacts.length === 1 ? ' contato' : ' contatos'}
          </strong>
        )}
        <Link to="/new">Novo contato</Link>
      </Header>

      {hasError && (
        <ErrorContainer>
          <img src={sad} alt="sad-face" />
          <div>
            <strong>Ocorreu um erro ao obter os seus contatos!</strong>
            <Button onClick={handleTryAgain}>Tentar novamente</Button>
          </div>
        </ErrorContainer>
      )}

      {!hasError && (
        <>
          {contacts.length < 1 && !isLoading && (
            <EmptyListContainer>
              <img src={emptyBox} alt="empty-box" />
              <p>
                Você ainda não tem nenhum contato cadastrado! Clique no botão
                <strong> ”Novo contato”</strong> acima para cadastrar o seu
                primeiro!
              </p>
            </EmptyListContainer>
          )}

          {contacts.length > 0 && filteredContacts.length < 1 && (
            <SearchNotFoundContainer>
              <img src={magnifierQuestion} alt="magnifier-question" />
              <span>
                Nenhum resultado foi encontrado para{' '}
                <strong>”{searchTerm}”</strong>.
              </span>
            </SearchNotFoundContainer>
          )}

          <ListContainer contactsOrderBy={contactsOrderBy}>
            {filteredContacts.length > 0 && (
              <header>
                <button type="button" onClick={handleToggleContactsOrderBy}>
                  <span>Nome</span>
                  <img src={arrow} alt="arrow-icon" />
                </button>
              </header>
            )}

            {filteredContacts.map(
              ({ id, name, email, phone, category_name }) => (
                <Contact
                  key={id}
                  id={id}
                  name={name}
                  email={email}
                  phone={phone}
                  category_name={category_name}
                />
              ),
            )}
          </ListContainer>
        </>
      )}
    </Container>
  );
}
