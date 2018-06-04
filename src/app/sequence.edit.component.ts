import { Component,OnInit,Inject } from '@angular/core';
import { Question } from './model/question';
import { Sequence } from './model/sequence';
import { Course } from './model/course';
import { CourseSequenceQuestionService } from './course-sequence-question.service';
import { UserService } from './user.service';
import { ActivatedRoute } from '@angular/router';
import { Observable} from 'rxjs/Rx';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'sequence',
  templateUrl: './sequence.edit.component.html',
})

export class SequenceEditComponent implements OnInit{

  title = 'LTC';
  courseID: number;
  id: string;
  response: string;
  questionForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private courseSequenceQuestionService: CourseSequenceQuestionService,
              private userService: UserService,
              @Inject(FormBuilder) fb: FormBuilder) {
      this.questionForm = fb.group({
      title:["",[Validators.required]],
  questionText: ["",[Validators.required]],
        questionAnswer: ["",[Validators.required]],
    });
  }

  sequences: Sequence[];
  questions : Question[];
  questionsToShow: Question[];
  selectedSequence : Sequence;
  selectedQuestion : Question;
  newQuestion : Question;
  newQuestionID : string;
  myUserService : UserService;

  ngOnInit() {

    let sequenceID = this.route.snapshot.params['sequenceID'];
  console.log("THe sequence ID is:"+sequenceID);

    this.courseSequenceQuestionService.getSequenceByID(sequenceID).subscribe(
      data => {
        console.log("Attempting to load seqeunce in ngInit");
        console.log(data);
        this.selectedSequence = data;
        this.courseSequenceQuestionService.currentSequence = data;
      },
      err => {
        console.error("Error getting sequence!");
        return Observable.throw(err);
      },
      () => {
        console.log("Attempting to load questions");
        this.courseSequenceQuestionService.getMultipleQuestions(this.selectedSequence.questions).subscribe(
          data => {
            console.log("Got data back");
            console.log(data);
            this.questionsToShow = data
          }
        ),
          err=> {
            console.error("Error getting questions!");
            return Observable.throw(err);
          }
      })




    /*this.selectedSequence = this.courseSequenceQuestionService.getSequenceByID(sequenceID);
    this.questionsToShow = this.courseSequenceQuestionService.getQuestionsByID(this.selectedSequence.questions);*/
    this.myUserService = this.userService;
  }

  createNewQuestion(): void {
    this.newQuestion = new Question();
    this.newQuestion.questionAnswer={text:'', javascript:'', csharp:''};
  }

  deleteQuestion(question): void {

    this.courseSequenceQuestionService.deleteQuestion(question).subscribe(
      data => this.response = data,
      err => {
        console.error("Error deleting question!");
        return Observable.throw(err);
      },
      () => {
        this.courseSequenceQuestionService.getMultipleQuestions(this.selectedSequence.questions).subscribe(data => this.questionsToShow = data)
      }
    );
}

  submitNewQuestion(): void {

    this.courseSequenceQuestionService.addQuestion(this.newQuestion).subscribe(
      data => {
        this.response = data;
        console.log(data);
        this.newQuestionID = data.questionID;
      },
      err => {
        console.error("Error adding question!");
        return Observable.throw(err);
      },
      () => {

        //TODO Case when sequence could not be created must be handled
        this.selectedSequence.questions.push(this.newQuestionID);
        this.courseSequenceQuestionService.updateSequence(this.selectedSequence).subscribe(
          data => {
            console.log(data);
            this.response = data
          },
          err=> {
            console.error("Error adding question to seqeunce");
            return Observable.throw(err);
          },
          () => {
            this.courseSequenceQuestionService.getMultipleQuestions(this.selectedSequence.questions).subscribe(data => this.questionsToShow = data)
            this.newQuestion=null;
          }

        )

            }
    );
  }

  reloadDisplay(): void {
    this.courseSequenceQuestionService.getMultipleQuestions(this.selectedSequence.questions).subscribe(
      data => {
        console.log(data);
        this.questionsToShow = data
      }
    ),
      err=> {
        console.error("Error getting questions!");
        return Observable.throw(err);
      }

  }

  saveChanges():void {

    this.courseSequenceQuestionService.updateSequence(this.selectedSequence).subscribe(
      data => {
        console.log(data);
        this.response = data
      },
      err=> {
        console.error("Error updating sequence");
        return Observable.throw(err);
      },
      () => {
       // this.reloadDisplay();
      }

    )
  }

}






