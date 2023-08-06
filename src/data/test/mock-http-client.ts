import { HttpPostParams } from '@/data/protocols/http/http-post-client';
import { HttpResponse, HttpStatusCode } from '../protocols/http/http-response';
export class HttpPostClientSpy implements HttpPostClientSpy {
  url?: string;
  body?: object;
  response: HttpResponse = {
    statusCode: HttpStatusCode.success,
  };

  async post(params: HttpPostParams): Promise<HttpResponse> {
    this.url = params.url;
    this.body = params.body;
    return Promise.resolve(this.response);
  }
}
