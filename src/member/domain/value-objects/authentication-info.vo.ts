import { Email } from "@src/member/domain/value-objects/email.vo";

export class AuthenticationInfo {
  readonly email: Email;
  readonly password: HashedPassword | null;
  readonly provider: LoginProvider;

  private constructor(
    email: Email,
    password: HashedPassword | null,
    provider: LoginProvider,
  ) {
    this.email = email;
    this.password = password;
    this.provider = provider;
  }
}
