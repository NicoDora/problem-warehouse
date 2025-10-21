export enum RoleEnum {
  USER = "USER",
  ADMIN = "ADMIN",
}

export class Role {
  public readonly value: RoleEnum;

  private constructor(value: RoleEnum) {
    this.value = value;
  }

  public static create(role: string): Role {
    const upperRole = role.toUpperCase();

    if (!(upperRole in RoleEnum)) {
      throw new Error(`${role}는 지원하지 않는 역할입니다.`);
    }

    return new Role(upperRole as RoleEnum);
  }
}
