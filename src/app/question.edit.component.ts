import { NgModule }       from '@angular/core';
import { Component,OnInit, Inject } from '@angular/core';
import { Question } from './model/question';
import { Sequence } from './model/sequence';
import { Course } from './model/course';
import { Router } from '@angular/router';
import { CourseSequenceQuestionService } from './course-sequence-question.service';
import { UserService } from './user.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable} from 'rxjs/Rx';


@Component({
  selector: 'question',
  templateUrl: './question.edit.component.html',
})
export class QuestionEditComponent implements OnInit{

  constructor(private route: ActivatedRoute,
              router : Router,
              private userService : UserService,
              private courseSequenceQuestionService: CourseSequenceQuestionService,
              @Inject(FormBuilder) fb: FormBuilder) {
    this.questionForm = fb.group({
      answer: ["",[Validators.required]],
    });
    this.router = router;
  }
  title = 'LTC';
  id: string;
  questionForm: FormGroup;
  questions : Question[];
  selectedQuestion : Question;
  feedback : String;
  response: string;
  alreadyCorrect: boolean = false;
  router : Router;

  ngOnInit() {
    let questionID = this.route.snapshot.params['questionID'];

    this.courseSequenceQuestionService.getQuestionByID(questionID).subscribe(
      data => {
        this.selectedQuestion = data;
        this.courseSequenceQuestionService.currentQuestion=data;
      },
      err => {
        console.error("Error getting question!");
        return Observable.throw(err);
      },)

  }

  saveChanges():void {

    this.courseSequenceQuestionService.updateQuestion(this.selectedQuestion).subscribe(
      data => {
        console.log(data);
        this.response = data
      },
      err=> {
        console.error("Error updating question");
        return Observable.throw(err);
      },
      () => {
        this.router.navigate(['teacher/sequence/edit/'+this.courseSequenceQuestionService.currentSequence._id]);
      }
    )
  }
}




