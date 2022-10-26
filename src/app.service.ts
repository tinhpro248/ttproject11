import { ConsoleLogger, Injectable } from '@nestjs/common';
import { Semester } from './modules/semester.entity';
import { Subject } from './modules/subject.entity';
import { Course } from './modules/course.entity';

@Injectable()
export class AppService {
  getAllSemester(): Semester[] {
    var subject1 = new Subject('CO3109', 'Thực tập đồ án', 2);
    var subject2 = new Subject('CO3038', 'PT UD INTER.OF THINGS', 3);
    var subject3 = new Subject('CO3117', 'Học máy', 3);

    var courses1 = new Course(
      '1',
      subject1,
      'L01',
      'Thu 2',
      '4-6',
      'H2-106',
      [1, 2, 3, 4, 5],
    );
    var courses2 = new Course(
      '2',
      subject2,
      'L02',
      'Thu 2',
      '4-6',
      'H2-106',
      [1, 2, 3, 4, 5],
    );
    var courses3 = new Course(
      '3',
      subject3,
      'L03',
      'Thu 2',
      '4-6',
      'H2-106',
      [1, 2, 3, 4, 5],
    );
    var courses4 = new Course(
      '4',
      subject1,
      'L04',
      'Thu 2',
      '4-6',
      'H2-106',
      [1, 2, 3, 4, 5],
    );

    var semester1 = new Semester('HK211', [courses1, courses2]);
    var semester2 = new Semester('HK212', [courses3, courses4]);

    var semesterList = [semester1, semester2];
    return semesterList;
  }

  getOneSemester(id: string): Semester {
    var subject1 = new Subject('CO3109', 'Thực tập đồ án', 2);
    var subject2 = new Subject('CO3038', 'PT UD INTER.OF THINGS', 3);
    var subject3 = new Subject('CO3117', 'Học máy', 3);

    var courses1 = new Course(
      '1',
      subject1,
      'L01',
      'Thu 2',
      '4-6',
      'H2-106',
      [1, 2, 3, 4, 5],
    );
    var courses2 = new Course(
      '2',
      subject2,
      'L02',
      'Thu 2',
      '4-6',
      'H2-106',
      [1, 2, 3, 4, 5],
    );
    var courses3 = new Course(
      '3',
      subject3,
      'L03',
      'Thu 2',
      '4-6',
      'H2-106',
      [1, 2, 3, 4, 5],
    );
    var courses4 = new Course(
      '4',
      subject1,
      'L04',
      'Thu 2',
      '4-6',
      'H2-106',
      [1, 2, 3, 4, 5],
    );

    var semester1 = new Semester('HK211', [courses1, courses2]);
    var semester2 = new Semester('HK212', [courses3, courses4]);

    var semesterList = [semester1, semester2];

    for (let i of semesterList) {
      if (id === i.getId()) {
        return i;
      }
    }
    return null;
  }
}
