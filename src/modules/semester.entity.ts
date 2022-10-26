import { Course } from './course.entity';

export class Semester {
  constructor(public id: string, public courses: Course[]) {}
  public getId(): string {
    return this.id;
  }
}
