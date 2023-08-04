import { HttpPostParams } from '../protocols/http/http-post-client';
export class HttpPostClientSpy implements HttpPostClientSpy {
  url?: string;

  async post(params: HttpPostParams): Promise<void> {
    this.url = params.url;
    return Promise.resolve();
  }
}
