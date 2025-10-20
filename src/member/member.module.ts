import { Module } from "@nestjs/common";
import { ClassValidatorEmailValidator } from "@src/member/infrastructure/validators/class-validator.email.validator";

@Module({
  imports: [],
  controllers: [],
  providers: [
    { provide: "IEmailValidator", useClass: ClassValidatorEmailValidator },
  ],
})
export class MemberModule {}
