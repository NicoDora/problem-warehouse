import { IPasswordHasher } from "@src/member/domain/ports/password-hasher.interface";
import * as bcrypt from "bcrypt";

export class BcryptPasswordHasher implements IPasswordHasher {
  private readonly saltRounds: number = 10;

  async hash(plainPassword: string): Promise<string> {
    return bcrypt.hash(plainPassword, this.saltRounds);
  }

  async compare(
    plainPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(plainPassword, hashedPassword);
  }
}
