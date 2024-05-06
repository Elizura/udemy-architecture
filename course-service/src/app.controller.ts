import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';
import { CreateCourseEvent } from './course-crud-event';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('course_created')
  handleCourseCreated(course: CreateCourseEvent) {
    console.log(
      `course with title ${course.title} and content ${course.content} has been created succefully by teacher ${course.teacher.name}`,
    );
    this.appService.createCourse(course.title, course.content, course.teacher, course.isPremium, course.usersSub);
  }
}
