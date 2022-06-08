import { APIError } from '../../errors/APIError';
import { delay } from '../../utils/delay';

class HttpClient {
  baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async makeRequest(path: string, options?: RequestInit) {
    await delay(500);

    const headers = new Headers();

    if (options?.body) {
      headers.append('Content-Type', 'application/json');
    }

    if (options?.headers) {
      Object.entries(options.headers).forEach(([key, value]) => {
        headers.append(key, value);
      });
    }

    const response = await fetch(`${this.baseURL}${path}`, {
      ...options,
      headers,
    });

    const contentTypeHeader = response.headers.get('Content-Type');

    let responseBody = null;

    if (contentTypeHeader?.includes('application/json')) {
      responseBody = await response.json();
    }

    // o response.ok é um boolean que faz o papel de saber se o status da response está entre 200 e 299,
    // ou seja, se é um status de sucesso
    if (response.ok) {
      return responseBody;
    }

    throw new APIError(responseBody, response);
  }

  get(path: string, options?: RequestInit) {
    return this.makeRequest(path, {
      method: 'GET',
      headers: options?.headers,
    });
  }

  post(path: string, options?: RequestInit) {
    return this.makeRequest(path, {
      method: 'POST',
      body: options?.body,
      headers: options?.headers,
    });
  }
}

export default HttpClient;
