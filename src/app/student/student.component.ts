import { Component } from '@angular/core';
import { Question } from '../model/question';
import { Sequence } from '../model/sequence';
import { Course } from '../model/course';
import { CourseSequenceQuestionService } from '../course-sequence-question.service';
import { UserService } from  '../user.service';
import {User} from '../model/user';
import { OnInit } from '@angular/core';

@Component({
  selector: 'student',
  templateUrl: 'student.component.html',
})

export class StudentComponent implements OnInit  {

  questions : Question[];
  sequences : Sequence[];
  courses : Course[];
  user : User;

  constructor(private courseSequenceQuestionService: CourseSequenceQuestionService, private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.getCurrentUser();
    this.courseSequenceQuestionService.getAllCourses().subscribe(data => this.courses = data);
  }

  title = 'LTC';

  selectedQuestion : Question;
  selectedSequence : Sequence;
  selectedCourse : Course;

  onSelectQuestion(question: Question): void {
    this.selectedQuestion = question;
  }

  onSelectSequence(sequence: Sequence): void {
    this.selectedSequence = sequence;
  }

  onSelectCourse(course: Course): void {
    this.selectedCourse = course;
  }
}


