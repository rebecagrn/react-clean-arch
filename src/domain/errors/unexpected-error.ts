export class UnexpectedError extends Error {
  constructor() {
    super('Algum erro aconteceu. Tente novamente em breve');
    this.name = 'InvalidCredentialError';
  }
}
