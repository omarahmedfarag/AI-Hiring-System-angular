import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './HR/quiz/quiz.component';
import { QuestionComponent } from './HR/question/question.component';
import { AnswersComponent } from './HR/answers/answers.component';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {PlacesComponent} from "./Emptyplaces/places/places.component";
import { WelcomComponent } from './welcom/welcom.component';
import { DisplayQuizzesComponent } from './HR/display-quizzes/display-quizzes.component';
import { HRComponent } from './HR/hr/hr.component';
import { CandidateComponent } from './Candidate/candidate/candidate.component';
import { LoginComponent } from './auth/login/login.component';
import { CvComponent } from './Candidate/cv/cv.component';
import { DummyHomeComponent } from './Candidate/dummy-home/dummy-home.component';
import { MessegeComponent } from './Candidate/messege/messege.component';
import { RequestsComponent } from './HR/requests/requests.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './auth/register/register.component';
import { TestQuizComponent } from './test-quiz/test-quiz.component';
@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuestionComponent,
    AnswersComponent,
    PlacesComponent,
    WelcomComponent,
    DisplayQuizzesComponent,
    HRComponent,
    CandidateComponent,
    LoginComponent,
    CvComponent,
    DummyHomeComponent,
    MessegeComponent,
    RequestsComponent,
    RegisterComponent,
    TestQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
