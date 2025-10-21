import { IEmailValidator } from "@src/member/domain/ports/email.validator.interface";
import { IPasswordHasher } from "@src/member/domain/ports/password-hasher.interface";
import { Email } from "@src/member/domain/value-objects/email.vo";
import { HashedPassword } from "@src/member/domain/value-objects/hashed-password.vo";
import { LoginProvider } from "@src/member/domain/value-objects/login-provider.vo";

export class AuthenticationInfo {
  public readonly email: Email;
  public readonly password: HashedPassword | null;
  public readonly provider: LoginProvider;

  private constructor(
    email: Email,
    password: HashedPassword | null,
    provider: LoginProvider,
  ) {
    this.email = email;
    this.password = password;
    this.provider = provider;
  }

  public static async create(
    emailString: string,
    plainPassword: string | null,
    providerString: string,
    emailValidator: IEmailValidator,
    passwordHasher: IPasswordHasher,
  ): Promise<AuthenticationInfo> {
    const email = Email.create(emailString, emailValidator);
    const provider = LoginProvider.create(providerString);
    let password: HashedPassword | null = null;

    if (provider.isLocal()) {
      if (!plainPassword) {
        throw new Error("로컬 가입 시에는 비밀번호가 필요합니다.");
      }

      password = await HashedPassword.create(plainPassword, passwordHasher);
    }

    return new AuthenticationInfo(email, password, provider);
  }
}
