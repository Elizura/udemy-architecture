import { Teacher, Users } from './models';

export class CreateCourseEvent {
  constructor(
    public readonly title: string,
    public readonly content: string,
    public readonly teacher: Teacher,
    public readonly isPremium: boolean,
    public readonly usersSub: Users[],
  ) {}
}
