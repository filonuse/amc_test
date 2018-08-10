export interface IAuthModel {
  email: string;
  password: string;
}

export class AuthModel implements IAuthModel {
  constructor() {
    this.email = '';
    this.password = '';
  }
  email: string;
  password: string;
}
