import { APIError } from '../../errors/APIError';
import { delay } from '../../utils/delay';

class HttpClient {
  baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async get(path: string) {
    await delay(500);

    const response = await fetch(`${this.baseURL}${path}`);

    const contentTypeHeader = response.headers.get('Content-Type');

    let body = null;

    if (contentTypeHeader?.includes('application/json')) {
      body = await response.json();
    }

    // o response.ok é um boolean que faz o papel de saber se o status da response está entre 200 e 299,
    // ou seja, se é um status de sucesso
    if (response.ok) {
      return body;
    }

    throw new APIError(body, response);
  }
}

export default HttpClient;
