import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnswersService {

  constructor(private http:HttpClient) { }

  addAnswers(quizId,questionId,body):Observable<any>
  {
    return this.http.post("http://localhost/Ai/hiringSystem/public/api/quizzes/"+quizId+"/questions/"+questionId+"/answers",body)
  }

  getAnswers(quizId,questionId):Observable<any>
  {
    return this.http.get("http://localhost/Ai/hiringSystem/public/api/quizzes/"+quizId+"/questions/"+questionId+"/answers")
  }
  

}
