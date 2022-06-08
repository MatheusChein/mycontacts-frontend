import HttpClient from './utils/HttpClient';

interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  category_name?: string | null;
}

type CreateContact = Omit<Contact, 'id' | 'category_name'> & {
  category_id: string;
};

class ContactsService {
  httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  async listContacts(contactsOrderBy = 'asc'): Promise<Contact[]> {
    return this.httpClient.get(`/contacts?orderBy=${contactsOrderBy}`);
  }

  async createContact(contact: CreateContact) {
    return this.httpClient.post('/contacts', {
      body: JSON.stringify(contact),
    });
  }
}

export default new ContactsService();
