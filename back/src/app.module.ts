import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CvController } from './cv/cv.controller';
import { CvService } from './cv/cv.services';

@Module({
  imports: [],
  controllers: [AppController, CvController],
  providers: [AppService, CvService],
})
export class AppModule {}
