import { Injectable } from "@nestjs/common";
import { IEmailValidator } from "@src/member/domain/ports/email.validator.interface";
import { IsEmail, validateSync } from "class-validator";

class EmailDto {
  @IsEmail()
  email!: string;
}

@Injectable()
export class ClassValidatorEmailValidator implements IEmailValidator {
  isValid(email: string): boolean {
    const dto = new EmailDto();
    dto.email = email;
    const errors = validateSync(dto);
    return errors.length === 0;
  }
}
