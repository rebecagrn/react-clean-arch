import { HttpPostClient } from '@/data/protocols/http/http-post-client';
import { HttpStatusCode } from '@/data/protocols/http/http-response';
import { InvalidCredentialError } from '@/domain/errors/invalid-credential-errors';
import { UnexpectedError } from '@/domain/errors/unexpected-error';
import { AuthenticationParams } from 'domain/usecases/authentication';

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async auth(params: AuthenticationParams): Promise<void> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params,
    });
    switch (httpResponse.statusCode) {
      case HttpStatusCode.success:
        break;
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialError();
      default:
        throw new UnexpectedError();
    }
  }
}
