import { NgModule }       from '@angular/core';
import { Component,OnInit, Inject } from '@angular/core';
import { Question } from './model/question';
import { Sequence } from './model/sequence';
import { Course } from './model/course';
import { CourseSequenceQuestionService } from './course-sequence-question.service';
import { UserService } from './user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable} from 'rxjs/Rx';


@Component({
  selector: 'question',
  templateUrl: './question.component.html',
})
export class QuestionComponent implements OnInit{

  constructor(private route: ActivatedRoute,
              private router: Router,
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
  alreadyCorrect: boolean = false;

  ngOnInit() {
    let questionID = this.route.snapshot.params['questionID'];

    this.courseSequenceQuestionService.getQuestionByID(questionID).subscribe(
      data => {
        this.selectedQuestion = data;
        this.courseSequenceQuestionService.currentQuestion = data;
        this.userService.currentQuestionID=this.selectedQuestion._id;
        this.userService.currentQuestionTitle=this.selectedQuestion.questionTitle;
        this.alreadyCorrect = this.userService.hasUserAlreadyAnsweredQuestion(this.selectedQuestion._id);
        if(this.alreadyCorrect) {this.feedback = "You have already answered this question.";}
      },
      err => {
        console.error("Error getting question!");
        return Observable.throw(err);
      },)



    /*
    this.selectedQuestion = this.courseSequenceQuestionService.getQuestionByID(questionID);

    */

  }

  submitAnswer(event) {

    let isCorrect:boolean = this.courseSequenceQuestionService.isAnswerCorrect(this.selectedQuestion,this.questionForm.value.answer);

    if(isCorrect){
      this.userService.addCorrectAnswer(this.selectedQuestion._id,this.questionForm.value.answer);
      this.feedback="Right answer!";
      this.alreadyCorrect=true;}
    else{this.feedback = "Wrong answer - try again.";}
  }

  backToSequence() : void {

     this.router.navigate(['/student/sequence/'+this.courseSequenceQuestionService.currentSequence._id]);
  }

 /* nextQuestion() : void {

    alert("Forward");

  }   */

}




