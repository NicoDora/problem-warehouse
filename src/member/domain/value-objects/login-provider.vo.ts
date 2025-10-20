enum LoginProviderEnum {
  LOCAL = "LOCAL",
  GOOGLE = "GOOGLE",
  NAVER = "NAVER",
}

export class LoginProvider {
  public readonly value: LoginProviderEnum;

  private constructor(value: LoginProviderEnum) {
    this.value = value;
  }

  public static create(provider: string): LoginProvider {
    const upperProvider = provider.toUpperCase();

    if (!(upperProvider in LoginProviderEnum)) {
      throw new Error(`${provider}는 지원하지 않는 로그인 제공자입니다.`);
    }

    return new LoginProvider(upperProvider as LoginProviderEnum);
  }

  public equals(other: LoginProvider): boolean {
    return this.value === other.value;
  }

  public isLocal(): boolean {
    return this.value === LoginProviderEnum.LOCAL;
  }

  public isSocial(): boolean {
    return this.value !== LoginProviderEnum.LOCAL;
  }
}
