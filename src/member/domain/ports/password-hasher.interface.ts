export interface IPasswordHasher {
  /**
   * 일반 텍스트 비밀번호를 해싱합니다.
   * @param plainPassword 해싱할 비밀번호
   * @returns 해싱된 비밀번호
   */
  hash(plainPassword: string): Promise<string>;
  /**
   * 사용자가 입력한 평문 비밀번호와 DB에 저장된 해싱된 비밀번호를 비교합니다.
   * @param plainPassword 사용자가 입력한 평문 비밀번호
   * @param hashedPassword DB에 저장된 해싱된 비밀번호
   */
  compare(plainPassword: string, hashedPassword: string): Promise<boolean>;
}
