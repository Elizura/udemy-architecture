import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Course } from './models';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  createCourse(@Body() course: Course): any {
    this.appService.createCourse(course);
  }
}
