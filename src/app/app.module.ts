import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '@angular/material';




import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { QuestionComponent } from './question.component';
import { QuestionEditComponent } from './question.edit.component';
import { CourseComponent } from './course.component';
import { CourseEditComponent } from './course.edit.component';
import { SequenceEditComponent } from './sequence.edit.component';
import { SequenceComponent } from './sequence.component';
import { AboutComponent} from './about/about.component';
import { LoginComponent} from './login/login.component';
import { HomeComponent} from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'student', component: StudentComponent },
  { path: 'student/course/:courseID', component: CourseComponent },
  { path: 'student/sequence/:sequenceID', component: SequenceComponent },
  { path: 'student/question/:questionID', component: QuestionComponent },
  { path: 'teacher', component: TeacherComponent },
  { path: 'teacher/course/:courseID', component: CourseComponent },
  { path: 'teacher/course/edit/:courseID', component: CourseEditComponent },
  { path: 'teacher/sequence/:sequenceID', component: SequenceComponent },
  { path: 'teacher/sequence/edit/:sequenceID', component: SequenceEditComponent },
  { path: 'teacher/question/:questionID', component: QuestionComponent },
  { path: 'teacher/question/edit/:questionID', component: QuestionEditComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
 // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TeacherComponent,
    QuestionComponent,
    HomeComponent,
    AboutComponent,
    CourseComponent,
    CourseEditComponent,
    SequenceEditComponent,
    QuestionEditComponent,
    LoginComponent,
    SequenceComponent,
    QuestionComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


