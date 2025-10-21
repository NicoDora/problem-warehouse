import { Nickname } from "@src/member/domain/value-objects/nickname.vo";

export class UserProfile {
  public readonly nickname: Nickname;
  public readonly imageUrl: string | null;

  private constructor(nickname: Nickname, imageUrl: string | null) {
    this.nickname = nickname;
    this.imageUrl = imageUrl;
  }

  public static create(
    nicknameString: string,
    imageUrl?: string | null,
  ): UserProfile {
    const nickname = Nickname.create(nicknameString);
    return new UserProfile(nickname, imageUrl ?? null);
  }
}
