import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
//import { Question } from './model/question';
import { Question } from './model/question';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'question-detail',
  templateUrl: 'question-detail.component.html',
})

/*
@Injectable()
export class QuestionService {

  // Resolve HTTP using the constructor
  constructor (private http: Http) {}
  // private instance variable to hold base url
  private questionsUrl = 'http://localhost:3000/api/question/all';


  // Fetch all existing comments
  getQuestions() : Observable<Question[]> {

    // ...using get request
    return this.http.get(this.questionsUrl)
    // ...and calling .json() on the response to return data
      .map((res:Response) => res.json())
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

}
*/

export class QuestionComponent {
    question: Question;
    /*id:number;
    questionTitle: string;
    questionText: string;
    questionAnswer: string;*/
}


