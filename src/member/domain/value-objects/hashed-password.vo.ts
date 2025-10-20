import { IPasswordHasher } from "@src/member/domain/ports/password-hasher.interface";

export class HashedPassword {
  public readonly value: string;

  private constructor(hashedValue: string) {
    this.value = hashedValue;
  }

  public static async create(
    plainPassword: string,
    hasher: IPasswordHasher,
  ): Promise<HashedPassword> {
    if (!plainPassword || plainPassword.trim().length < 8) {
      throw new Error("비밀번호는 최소 8자 이상이어야 합니다.");
    }

    const hashedValue = await hasher.hash(plainPassword);
    return new HashedPassword(hashedValue);
  }

  public async compare(
    plainPassword: string,
    hasher: IPasswordHasher,
  ): Promise<boolean> {
    return hasher.compare(plainPassword, this.value);
  }

  public equals(other: HashedPassword): boolean {
    return this.value === other.value;
  }
}
