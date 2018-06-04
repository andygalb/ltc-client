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

@Component({
  selector: 'teacher',
  templateUrl: 'teacher.component.html',
})

export class TeacherComponent implements OnInit{


  questions: Question[];
  sequences: Sequence[];
  courses :Course[];
  user: User;
  questionForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private userService : UserService,
              private courseSequenceQuestionService: CourseSequenceQuestionService,
              @Inject(FormBuilder) fb: FormBuilder) {
    this.questionForm = fb.group({
      answer: ["",[Validators.required]],
    });
  }

  ngOnInit(): void {
    this.user = this.userService.getCurrentUser();
  }

  selectedQuestion : Question;
  newQuestion : Question;

  onSelect(question: Question): void {
    this.selectedQuestion= question;
  }

  createNewQuestion(): void {
   /* this.selectedQuestion = {id:4554,name:'',questionTitle:'',questionText:'',questionAnswer:'' };
  //  this.newQuestion = {id:4554,name:'',questionTitle:'',questionText:'',questionAnswer:'' };*/
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

