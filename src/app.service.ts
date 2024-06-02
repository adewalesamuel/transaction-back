import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const appName: string = process.env.APP_NAME ?? '';

    return 'Hello World!' + appName;
  }
}
