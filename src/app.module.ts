import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppTags } from './config/di/app.tags';
// import { AppService } from './services/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [{ provide: AppTags.AppService, useValue: null }],
})
export class AppModule {}
