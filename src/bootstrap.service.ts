import { INestApplication, Injectable } from "@nestjs/common";

@Injectable()
export class BootstrapService {
  setShutdownHooks(app: INestApplication) {
    app.enableShutdownHooks();
  }

  async startingServer(app: INestApplication) {
    await app.listen(process.env.PORT ?? 3000);
  }
}
