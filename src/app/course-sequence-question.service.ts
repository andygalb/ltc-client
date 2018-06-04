import { Injectable } from '@angular/core';
import { Question } from './model/question';
import { Sequence } from './model/sequence';
import { Course } from './model/course';
import { Http,Headers, Response } from '@angular/http';
import { QUESTIONS } from './mock-courses-sequences-questions';
import { SEQUENCES } from './mock-courses-sequences-questions'
import { COURSES } from './mock-courses-sequences-questions'
import 'rxjs/add/operator/map';

@Injectable()
export class CourseSequenceQuestionService {

  //serverAddress = 'http://localhost:3000';
  serverAddress = 'https://ltc-project.herokuapp.com';


  constructor(private http: Http) {}

  currentCourse: Course;
  currentSequence: Sequence;
  currentQuestion : Question;

   getAllQuestions() {
   return this.http.get(this.serverAddress+'/api/question/all').map((res:Response) => res.json());
   }

  getAllCourses() {
    return this.http.get(this.serverAddress+'/api/course/all').map((res:Response) => res.json());
  }

  addCourse(course: Course) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(course);
    return this.http.put(this.serverAddress+'/api/course',JSON.stringify(course), {headers:headers}).map((res:Response) => res.json());
  }

  updateCourse(course: Course) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(course);
    return this.http.post(this.serverAddress+'/api/course/'+course._id,JSON.stringify(course), {headers:headers}).map((res:Response) => res.json());
  }

  deleteCourse(course: Course) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.delete(this.serverAddress+'/api/course/'+course._id, {headers:headers}).map((res:Response) => res.json());
  }

  deleteSequence(sequence: Sequence) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.delete(this.serverAddress+'/api/sequence/'+sequence._id, {headers:headers}).map((res:Response) => res.json());
  }

  deleteQuestion(question: Question) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.delete(this.serverAddress+'/api/question/'+question._id, {headers:headers}).map((res:Response) => res.json());
  }

 getQuestionByID(id:number){

   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
   return this.http.get(this.serverAddress+'/api/question/'+id,{headers:headers}).map((res:Response) => res.json());
 }

  addQuestion(question: Question) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(question);
    return this.http.put(this.serverAddress+'/api/question',JSON.stringify(question), {headers:headers}).map((res:Response) => res.json());
  }

  addSequence(sequence: Sequence) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.serverAddress+'/api/sequence',JSON.stringify(sequence), {headers:headers}).map((res:Response) => res.json());
  }

  updateSequence(sequence: Sequence) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.serverAddress+'/api/sequence/'+sequence._id,JSON.stringify(sequence), {headers:headers}).map((res:Response) => res.json());
  }

  updateQuestion(question: Question) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.serverAddress+'/api/question/'+question._id,JSON.stringify(question), {headers:headers}).map((res:Response) => res.json());
  }

  getSequenceByID(id:number) {

    let headers = new Headers();
    console.log("Calling sequence by ID");
    console.log(id);
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serverAddress+'/api/sequence/'+id,{headers:headers}).map((res:Response) => res.json());
  }

  getCourseByID(id:number) {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serverAddress+'/api/course/'+id,{headers:headers}).map((res:Response) => res.json());
  }


  getMultipleSequences(sequences : number[]) {

    console.log("Multiple Seqeunces is being called");
    console.log(JSON.stringify(sequences));
    var objectToSend = {sequences:sequences};
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.serverAddress+'/api/multiple/sequences',JSON.stringify(objectToSend), {headers:headers}).map((res:Response) => res.json());

  }

  getMultipleQuestions(questions: number[]) {

    console.log(JSON.stringify(questions));
    var objectToSend = {questions:questions};
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.serverAddress+'/api/multiple/questions',JSON.stringify(objectToSend), {headers:headers}).map((res:Response) => res.json());
  }


  isAnswerCorrect(question:Question,givenAnswer:string): boolean {

    let isCorrect:boolean = false;
    if(question.questionAnswer.text==givenAnswer) {isCorrect = true;}
    return isCorrect;
  }


}
