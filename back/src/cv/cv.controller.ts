import { Controller, Get } from '@nestjs/common';
import { CvService } from './cv.services';

@Controller('cv')
export class CvController {
  constructor(private readonly cvService: CvService) {}

  @Get()
  getCv() {
    return this.cvService.getCv();
  }
}
