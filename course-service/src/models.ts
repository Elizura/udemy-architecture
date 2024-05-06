import * as mongoose from 'mongoose';

export interface Teacher {
  name: string;
  email: string;
}
export class Users {
  name: string;
  email: string;
  password: string;
}

export class Course {
  title: string;
  content: string;
  teacher: Teacher;
  isPremium: boolean;
  usersSub: Users[];
}

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const TeacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

export const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  teacher: { type: TeacherSchema, required: false },
  isPremium: { type: Boolean, required: false },
  usersSub: [{ type: UserSchema, required: false }],
});
