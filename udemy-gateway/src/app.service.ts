import { Inject, Injectable } from '@nestjs/common';
import { Course } from './models';
import { ClientProxy } from '@nestjs/microservices';
import { CreateCourseEvent } from './course-crud-event';

@Injectable()
export class AppService {
  constructor(@Inject('COURSES') private readonly courseClient: ClientProxy) {}  

  createCourse(course: Course) {    
    this.courseClient.emit(
      'course_created',
      new CreateCourseEvent(
        course.title,
        course.content,
        course.teacher,
        course.isPremium,
        course.usersSub,
      ),
    );
  }
}
