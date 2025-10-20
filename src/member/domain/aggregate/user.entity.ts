import { AuthenticationInfo } from "@src/member/domain/value-objects/authentication-info.vo";

/**
 * User Aggregate Root (User Entity)
 * @description 이 클래스를 통해서만 User 도메인의 상태를 변경할 수 있습니다.
 * @author NicoDora
 */
export class User {
  private constructor(
    public readonly id: string,
    private authInfo: AuthenticationInfo,
    private profile: UserProfile,
    private role: UserRole,
    private createdAt: Date,
    private updatedAt: Date,
  ) {}
}
