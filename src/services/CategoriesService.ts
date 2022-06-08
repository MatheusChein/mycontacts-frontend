import HttpClient from './utils/HttpClient';

interface Category {
  id: string;
  name: string;
  email: string;
  phone: string;
  category_name?: string | null;
}

class CategoriesService {
  httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  async listCategories(): Promise<Category[]> {
    return this.httpClient.get('/categories');
  }
}

export default new CategoriesService();
