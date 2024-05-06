import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseSchema } from './models';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Cluster15688:ZCijDspYcWmEAuVk@cluster15688.l30kuvi.mongodb.net/udemy',      
    ),
    MongooseModule.forFeature([
      {
        name: 'Course',
        schema: CourseSchema,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
