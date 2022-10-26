import { Controller, Get, Param, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { Semester } from './modules/semester.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('stinfo')
  getAllSemester(): Semester[] {
    return this.appService.getAllSemester();
  }
  @Get('stinfo/:id')
  getOneSemester(@Param('id') id: string): Semester {
    return this.appService.getOneSemester(id);
  }
}
