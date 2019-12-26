import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomComponent } from './welcom/welcom.component';
import { QuizComponent } from './HR/quiz/quiz.component';
import { DisplayQuizzesComponent } from './HR/display-quizzes/display-quizzes.component';
import { QuestionComponent } from './HR/question/question.component';
import { PlacesComponent } from './Emptyplaces/places/places.component';
import { CandidateComponent } from './Candidate/candidate/candidate.component';
import { HRComponent } from './HR/hr/hr.component';
import { LoginComponent } from './auth/login/login.component';
import { DummyHomeComponent } from './Candidate/dummy-home/dummy-home.component';
import { CvComponent } from './Candidate/cv/cv.component';
import { MessegeComponent } from './Candidate/messege/messege.component';
import { RequestsComponent } from './HR/requests/requests.component';
import { RegisterComponent } from './auth/register/register.component';
import { TestQuizComponent } from './test-quiz/test-quiz.component';


const routes: Routes = [
  {
    path:"candidate",component:CandidateComponent,children:[
      
      
      {
        path:"empytPlaces",
        component:PlacesComponent
      }
      ,
      {
        path:"login",
        component:LoginComponent
      }
      ,
      {
        path:"register",
        component:RegisterComponent
      }
      ,
      {
        path:"uploadcv",
        component:CvComponent
      }
      ,
      {
        path:"messege",
        component:MessegeComponent
      }
      ,
      {
        path:"test-quiz",
        component:TestQuizComponent
      }
      ,
      {
        path:"",
        component:DummyHomeComponent
        
      }
    ]

  }
  ,
  {
    path:"admin",component:HRComponent,children:[
  
      {
        path:"quiz",component:QuizComponent
      }
      ,
      {path:"quiz/:id/question",component:QuestionComponent}
      ,
      {
        path:"ShowQuizzes",component:DisplayQuizzesComponent
      }
      ,
      {
        path:'',component:WelcomComponent
      }
      ,
      {
        path:"requests",component:RequestsComponent
      }
    ]

  }
  
  ,
 
  
  {path:"quiz/:id/quiestion",
  component:QuestionComponent
  }
  ,
  {
    path:"display",component:DisplayQuizzesComponent
  }
  ,
  
  { path: '',
  redirectTo: 'candidate',
  pathMatch: 'full'
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
