import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }


  getQuestion(id):Observable<any>
  {
    return this.http.get("http://localhost/Ai/hiringSystem/public/api/quizzes/"+id+"/questions")
  }
  postQuestion(body,id):Observable<any>
  {
    let url="http://localhost/Ai/hiringSystem/public/api/quizzes/"+id+"/questions";
   return this.http.post(url,body);
  }
}
