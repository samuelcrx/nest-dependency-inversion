import { Controller, Get, Inject } from '@nestjs/common';
import { AppTags } from 'src/config/di/app.tags';
import { IAppService } from 'src/services/app.service';

@Controller()
export class AppController {
  constructor(
    @Inject(AppTags.AppService)
    private readonly appService: IAppService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello('Samuel');
  }
}
