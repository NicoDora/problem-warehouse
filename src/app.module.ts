import { Module } from "@nestjs/common";
import { AppController } from "@src/app.controller";
import { AppService } from "@src/app.service";
import { BootstrapService } from "@src/bootstrap.service";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, BootstrapService],
})
export class AppModule {}
