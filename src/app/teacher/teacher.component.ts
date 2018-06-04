import { Component, Inject } from '@angular/core';
import { Question } from '../model/question';
import { Sequence } from '../model/sequence';
import { Course } from '../model/course';
import { CourseSequenceQuestionService } from '../course-sequence-question.service';
import { UserService } from  '../user.service';
import {User} from '../model/user';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'teacher',
  templateUrl: 'teacher.component.html',
})

export class TeacherComponent implements OnInit{


  questions: Question[];
  sequences: Sequence[];
  courses :Course[];
  user: User;
  courseForm: FormGroup;
  response: String;
  userService: UserService;

  constructor(private route: ActivatedRoute,
              userService : UserService,
              private courseSequenceQuestionService: CourseSequenceQuestionService,
              @Inject(FormBuilder) fb: FormBuilder) {
    this.courseForm = fb.group({
      title:["",[Validators.required]],
      description: ["",[Validators.required]],
    });
    this.userService = userService;
  }

  ngOnInit(): void {
    if(!this.userService.isUserLoggedIn){ this.userService.logOut();}
    this.user = this.userService.getCurrentUser();
    this.courseSequenceQuestionService.getAllCourses().subscribe(data => this.courses = data);
  }

  selectedCourse : Course;
  newCourse : Course;
  error : string;

  onSelect(course: Course): void {
    this.courseSequenceQuestionService.addCourse(this.newCourse).subscribe(data => this.response = data);
  }

  onDelete(course: Course): void {

    this.courseSequenceQuestionService.deleteCourse(course).subscribe(
      data => this.response = data,
      err => {
        console.error("Error deleting course!");
        return Observable.throw(err);
      },
      () => this.courseSequenceQuestionService.getAllCourses().subscribe(data => this.courses = data)
      );

  }

  createNewCourse(): void {
   this.newCourse = {_id:null,courseTitle:'',courseDescription:'',sequences:[],created_at:null};
  }

  submitNewCourse(): void{

    this.courseSequenceQuestionService.addCourse(this.newCourse).subscribe(
         data => {
        this.response = data;
        this.newCourse = null;
      },
          err => {
            console.error("Error adding course!");
            return Observable.throw(err);
          },
          () => this.courseSequenceQuestionService.getAllCourses().subscribe(data => this.courses = data)

  );

  }

  addQuestion(question): void {
   /* console.log("Trying to add question");
    console.log(question);
    QUESTIONS.push(question);
    this.selectedQuestion = null;*/
  }

  deleteQuestion(question): void {
  /*  let index: number = QUESTIONS.indexOf(question);
    if (index !== -1) {
      QUESTIONS.splice(index, 1);
    }*/
  }
}

