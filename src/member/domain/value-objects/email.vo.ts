const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

/**
 * 이메일 주소를 나타내는 값 객체(Value Object).\
 * 이 객체는 불변(immutable)하며, 생성 시점에 항상 유효한 이메일 형식임을 보장합니다.
 */
export class Email {
  public readonly value: string;

  private constructor(value: string) {
    this.value = value.toLocaleLowerCase().trim();
  }

  public static create(email: string): Email {
    if (!EMAIL_REGEX.test(email)) {
      throw new Error("Invalid email format");
    }

    return new Email(email);
  }

  public equals(other: Email): boolean {
    return other instanceof Email && this.value === other.value;
  }
}
