import { Injectable } from '@angular/core';
import { User } from './model/user';
import { Result } from './model/user';
import { Http,Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Course } from './model/course';
import { Sequence } from './model/sequence';

@Injectable()
export class UserService {

  user: User = new User();
  isUserLoggedIn : boolean = false;
  router:Router;
  currentCourseID: string;
  currentCourseTitle: string;
  currentSequenceID: string;
  currentSequenceTitle: string;
  currentQuestionID: string;
  currentQuestionTitle: string;

  //serverAddress = "http://localhost:3000";
  serverAddress = 'https://ltc-project.herokuapp.com';

  constructor(private http: Http,
              router : Router) {
    this.router = router;
  }

  loginUser(user: User) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.serverAddress+'/api/user/login/',JSON.stringify(user), {headers:headers}).map((res:Response) => res.json());
  }


  initiateUser(user: User) {
   this.user = user;
 }

  logOut() : void{
    this.user=null;
    this.isUserLoggedIn=false;
    this.router.navigate(['home']);
  }

 getCurrentUser():User {
   return this.user;
 }

 //This should only be called if it's a correct answer!
 addCorrectAnswer(questionID: string,answer:string) : any {
   let result: Result = new Result;
   result._id = questionID;
   result.type = "question";
   result.dateTime = Date.now();
   result.answer = answer;
   result.courseID = this.currentCourseID;
   result.courseTitle = this.currentCourseTitle;
   result.sequenceID = this.currentSequenceID;
   result.sequenceTitle = this.currentSequenceTitle;
   result.questionID = this.currentQuestionID;
   result.questionTitle = this.currentQuestionTitle;

   this.user.results.push(result);


   this.updateUserResultsInDatabase().subscribe(
     data => {
       console.log(data);
     },
     err => {
       console.error("Error updating user's results!");
       return Observable.throw(err);
     },
     () => {
       return true; }
   );
 }

 updateUserResultsInDatabase() {

   //The user results in the database must also be updated, not just the local version
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
   return this.http.post(this.serverAddress+'/api/user/results/',{'_id': this.user._id, 'results': this.user.results}, {headers:headers}).map((res:Response) => res.json());
 }

 hasUserAlreadyAnsweredQuestion(questionID: string) :boolean{

   let alreadyAnsweredQuestion = false;
   for(let i:number =0; i< this.user.results.length; i++) {
     if(this.user.results[i]._id == questionID) {
       alreadyAnsweredQuestion = true;
       break;
     }
   }
   return alreadyAnsweredQuestion;
 }

}
