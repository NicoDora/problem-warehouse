import { Module } from "@nestjs/common";
import {
  BCRYPT_PASSWORD_HASHER_DI_TOKEN,
  CLASS_VALIDATOR_EMAIL_VALIDATOR_DI_TOKEN,
} from "@src/member/constants/di-tokens";
import { BcryptPasswordHasher } from "@src/member/infrastructure/security/bcrypt.password-hasher";
import { ClassValidatorEmailValidator } from "@src/member/infrastructure/validators/class-validator.email.validator";

@Module({
  imports: [],
  controllers: [],
  providers: [
    {
      provide: CLASS_VALIDATOR_EMAIL_VALIDATOR_DI_TOKEN,
      useClass: ClassValidatorEmailValidator,
    },
    {
      provide: BCRYPT_PASSWORD_HASHER_DI_TOKEN,
      useClass: BcryptPasswordHasher,
    },
  ],
})
export class MemberModule {}
