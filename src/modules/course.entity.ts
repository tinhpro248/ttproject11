import { Subject } from './subject.entity';

export class Course {
  constructor(
    public id: string,
    public subject: Subject,
    public group: string,
    public date: string,
    public time: string,
    public room: string,
    public week: number[],
  ) {}
}
