import { Component } from '@angular/core';

import {Question} from "./model/question";
import {Sequence} from "./model/sequence";
import {Course} from "./model/course";
import { CourseSequenceQuestionService } from './course-sequence-question.service';
import { UserService } from './user.service';
import {MdIcon, MdIconRegistry} from '@angular/material';


import { QUESTIONS,COURSES,SEQUENCES } from './mock-courses-sequences-questions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [CourseSequenceQuestionService, UserService],
  viewProviders: [MdIconRegistry],
 // directives: [MdIcon]
})


export class AppComponent {

  userService: UserService;

  constructor(private courseSequenceQuestionService:CourseSequenceQuestionService,
              userService: UserService,
              mdIconRegistry: MdIconRegistry) {
    mdIconRegistry
      .addSvgIconSetInNamespace('core', 'fonts/core-icon-set.svg')
    this.userService = userService;
  }
  title = 'LTC';

  ngOnInit() : void {}

  logOut(): void{
    this.userService.logOut();
  }


}




