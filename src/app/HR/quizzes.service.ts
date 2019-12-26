import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class QuizzesService {
  constructor(private htpp:HttpClient) { }
 /* addQuiz(id,name,type)
  {

    this.allQuizzes.push({quizId:id,quizName:name,quizType:type})
  }
  */
  getAllQuizzes():Observable<any>
  {
    return this.htpp.get('http://localhost/Ai/hiringSystem/public/api/quizzes');
  }
  addQuiz(quiz):Observable<any>
  {
    console.log(quiz);
    return this.htpp.post('http://localhost/Ai/hiringSystem/public/api/quizzes',quiz,
    {
      headers:new HttpHeaders({
        'Content-Type':'applcation/json'
      })
    }) ;
  }
 /* deleteQuiz(id)
  {
    let remove =this.allQuizzes.map(function(quiz)
    {
      return quiz.quizId;
    }).indexOf(id)

    this.allQuizzes.splice(remove,1)

  }
  */

  /*quizzesLength()
  {
    return this.allQuizzes.length;
  }
  */

}
