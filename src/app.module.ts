import { Module } from "@nestjs/common";
import { AppController } from "@src/app.controller";
import { AppService } from "@src/app.service";
import { BootstrapService } from "@src/bootstrap.service";
import { MemberModule } from "@src/member/member.module";

@Module({
  imports: [MemberModule],
  controllers: [AppController],
  providers: [AppService, BootstrapService],
})
export class AppModule {}
