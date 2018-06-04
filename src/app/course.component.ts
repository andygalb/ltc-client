import { Component,OnInit,Inject } from '@angular/core';
import { Sequence } from './model/sequence';
import { Course } from './model/course';
import { CourseSequenceQuestionService } from './course-sequence-question.service';
import { ActivatedRoute } from '@angular/router';
import { Observable} from 'rxjs/Rx';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { UserService} from './user.service';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
})
export class CourseComponent implements OnInit{

  constructor(private route: ActivatedRoute,
              private courseSequenceQuestionService: CourseSequenceQuestionService,
              userService :UserService,
              @Inject(FormBuilder) fb: FormBuilder) {
    this.sequenceForm = fb.group({
      title:["",[Validators.required]],
      description: ["",[Validators.required]],
    });
    this.userService= userService;
  }

  userService : UserService;
  sequenceForm: FormGroup;
  title = 'LTC';
  courseID: number;
  id: string;
  sequencesToShow: Sequence[];
  selectedSequence : Sequence;
  newSequence: Sequence;
  newSequenceID: String;
  selectedCourse : Course;
  response:String;
  profile = {};

  ngOnInit() {
    let courseID = this.route.snapshot.params['courseID'];


    this.courseSequenceQuestionService.getCourseByID(courseID).subscribe(
      data => {
        this.selectedCourse = data;
        this.courseSequenceQuestionService.currentCourse = data;
        console.log(this.selectedCourse);
      },
      err => {
        console.error("Error getting course!");
        return Observable.throw(err);
      },
      () => {
       this.reloadDisplay();
        this.userService.currentCourseID = this.selectedCourse._id;
        this.userService.currentCourseTitle = this.selectedCourse.courseTitle;
      }

    );

    //console.log(this.selectedCourse.sequences);
   // this.sequencesToShow=this.courseSequenceQuestionService.getSequencesByID(this.selectedCourse.sequences);
   // console.log(this.sequencesToShow);
   // this.sequencesToShow.push(this.sequences[0]);

  }

  createNewSequence(): void{
   this.newSequence = new Sequence();
  }

  //After a sequence is successfully created it has to be added to the course.
  submitNewSequence(sequence:Sequence): void{

    this.courseSequenceQuestionService.addSequence(this.newSequence).subscribe(
      data => {
        console.log("The sequence was created and now data has been returned.");
        console.log("The data is:");
        console.log(data);
        this.response = data;
        this.newSequenceID = data.sequenceID;
      },
      err=> {
        console.error("Error adding sequence");
        return Observable.throw(err);
      },
      () =>{
        //TODO Case when sequence could not be created must be handled
        this.selectedCourse.sequences.push(this.newSequenceID);
        this.courseSequenceQuestionService.updateCourse(this.selectedCourse).subscribe(
          data => {
            console.log(data);
            this.response = data
          },
          err=> {
            console.error("Error adding sequence to course");
            return Observable.throw(err);
          },
          () => {
              this.reloadDisplay();
            this.newSequence=null;
          }

          )

      }

      );

  }

  onSelectSequence(sequence: Sequence): void {
    this.selectedSequence = sequence;
  }

  reloadDisplay(): void {
    this.courseSequenceQuestionService.getMultipleSequences(this.selectedCourse.sequences).subscribe(
      data => {
        console.log(data);
        this.sequencesToShow = data
      }
    ),
      err=> {
        console.error("Error getting sequences!");
        return Observable.throw(err);
      }

  }
  onDelete(sequence: Sequence): void {

    this.courseSequenceQuestionService.deleteSequence(sequence).subscribe(
      data => this.response = data,
      err => {
        console.error("Error deleting sequence!");
        return Observable.throw(err);
      },
      () => {
        this.reloadDisplay();
      }
    );

  }
}




