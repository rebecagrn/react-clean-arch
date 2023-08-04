import { HttpPostParams } from '@/data/protocols/http/http-post-client';
export class HttpPostClientSpy implements HttpPostClientSpy {
  url?: string;
  body?: object;

  async post(params: HttpPostParams): Promise<void> {
    this.url = params.url;
    this.body = params.body;
    return Promise.resolve();
  }
}
