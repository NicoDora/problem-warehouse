export class Nickname {
  public readonly value: string;

  private constructor(value: string) {
    this.value = value;
  }

  public static create(nickname: string): Nickname {
    const trimmedNickname = nickname.trim();

    if (trimmedNickname.length < 2 || trimmedNickname.length > 20) {
      throw new Error("닉네임은 2자 이상 20자 이하여야 합니다.");
    }

    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/g;
    if (specialCharRegex.test(trimmedNickname)) {
      throw new Error("닉네임에는 특수문자를 포함할 수 없습니다.");
    }

    return new Nickname(trimmedNickname);
  }

  public equals(other: Nickname): boolean {
    return this.value === other.value;
  }
}
