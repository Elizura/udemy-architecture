import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course, Teacher, Users } from './models';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('Course') private readonly courseModel: Model<Course>,
  ) {}

  async createCourse(
    title: string,
    content: string,
    teacher: Teacher,
    isPremium: boolean,
    usersSub: Users[],
  ) {
    const newCourse = new this.courseModel({
      title: title,
      content: content,
      teacher: teacher,
      isPremium: isPremium,
      usersSub: usersSub,
    });
    const res = await newCourse.save();
    console.log('ress>>>>>', res);
    return '';
  }
}
