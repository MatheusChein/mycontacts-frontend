type Body = null | { error: string };

export class APIError extends Error {
  response: Response;

  constructor(body: Body, response: Response) {
    super();
    this.name = 'APIError';
    this.message = body?.error || `${response.status} - ${response.statusText}`;
    this.response = response;
  }
}
