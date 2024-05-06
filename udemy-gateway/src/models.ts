export class Course {
  title: string;
  content: string;
  teacher: Teacher;
  isPremium: boolean;
  usersSub: Users[];
}

export class Teacher {
  name: string;
  email: string;
}

export class Users {
  name: string;
  email: string;
  password: string;
  premium: boolean;
}