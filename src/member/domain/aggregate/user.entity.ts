import { IPasswordHasher } from "@src/member/domain/ports/password-hasher.interface";
import { AuthenticationInfo } from "@src/member/domain/value-objects/authentication-info.vo";
import { Role, RoleEnum } from "@src/member/domain/value-objects/role.vo";
import { UserProfile } from "@src/member/domain/value-objects/user-profile.vo";

interface SignUpParams {
  id: string;
  authInfo: AuthenticationInfo;
  profile: UserProfile;
}

/**
 * User Aggregate Root (User Entity)
 * @description 이 클래스를 통해서만 User 도메인의 상태를 변경할 수 있습니다.
 */
export class User {
  public readonly id: string;
  private authInfo: AuthenticationInfo;
  private profile: UserProfile;
  private role: Role;
  private createdAt: Date;
  private updatedAt: Date;

  private constructor(
    id: string,
    authInfo: AuthenticationInfo,
    profile: UserProfile,
    role: Role,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id;
    this.authInfo = authInfo;
    this.profile = profile;
    this.role = role;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public static signUp(params: SignUpParams): User {
    const now = new Date();
    const defaultRole = Role.create(RoleEnum.USER);

    const user = new User(
      params.id,
      params.authInfo,
      params.profile,
      defaultRole,
      now,
      now,
    );

    return user;
  }

  public async changePassword(
    oldPassword: string,
    newPassword: string,
    passwordHasher: IPasswordHasher,
  ): Promise<void> {
    if (!this.authInfo.provider.isLocal()) {
      throw new Error("소셜 로그인 사용자는 비밀번호를 변경할 수 없습니다.");
    }

    const isMatch = await this.authInfo.password?.compare(
      oldPassword,
      passwordHasher,
    );
    if (!isMatch) {
      throw new Error("기존 비밀번호가 일치하지 않습니다.");
    }

    this.authInfo = await this.authInfo.changePassword(
      newPassword,
      passwordHasher,
    );
  }
}
