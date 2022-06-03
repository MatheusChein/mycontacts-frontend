import HttpClient from './utils/HttpClient';

interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  category_name?: string | null;
}

class ContactsService {
  httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  async listContacts(contactsOrderBy = 'asc'): Promise<Contact[]> {
    return this.httpClient.get(`/contacts?orderBy=${contactsOrderBy}`);
  }
}

export default new ContactsService();
