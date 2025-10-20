import { NestFactory } from "@nestjs/core";
import { AppModule } from "@src/app.module";
import { BootstrapService } from "@src/bootstrap.service";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const bootStrapService = app.get<BootstrapService>(BootstrapService);

  bootStrapService.setShutdownHooks(app);

  await bootStrapService.startingServer(app);
}
bootstrap();
