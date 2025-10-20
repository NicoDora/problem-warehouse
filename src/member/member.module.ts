import { Module } from "@nestjs/common";
import { BcryptPasswordHasher } from "@src/member/infrastructure/security/bcrypt.password-hasher";
import { ClassValidatorEmailValidator } from "@src/member/infrastructure/validators/class-validator.email.validator";

@Module({
  imports: [],
  controllers: [],
  providers: [
    { provide: "IEmailValidator", useClass: ClassValidatorEmailValidator },
    { provide: "IPasswordHasher", useClass: BcryptPasswordHasher },
  ],
})
export class MemberModule {}
