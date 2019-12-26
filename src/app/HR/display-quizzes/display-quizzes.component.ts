import { Component, OnInit } from '@angular/core';
import { QuizzesService } from '../quizzes.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
declare let $:any;
@Component({
  selector: 'app-display-quizzes',
  templateUrl: './display-quizzes.component.html',
  styleUrls: ['./display-quizzes.component.css']
})
export class DisplayQuizzesComponent implements OnInit {
  allQuizzes=[];
  questions:any[]=[];
  constructor(private Quizzes:QuizzesService , private http:HttpClient,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {

    this.Quizzes.getAllQuizzes().subscribe(
      (data)=>
      {
        this.allQuizzes=data.data
      }
    )
      console.log(this.allQuizzes)
  }
  onQuizRemove(id:number,name:string)
  {
    
    if (confirm(" are you Sure to delet this !this will delete all queztions ans answers for that Quiz "+name))
            {
            let quizId=id;
            let url="http://localhost/Ai/hiringSystem/public/api/quizzes/"+quizId
            this.http.delete(url).subscribe(()=>
            {
              this.Quizzes.getAllQuizzes().subscribe(
                (data)=>
                {
                  this.allQuizzes=data.data
                }
              )
            }
              
            );
         
    } 
    
     
    /*
    this.Quizzes.deleteQuiz(id);
    this.allQuizzes=this.Quizzes.getAllQuizzes();
  */
  }
  collap(id)
  {

    //$('#collap'+id).css('display')!="none";
    $('#collap'+id).fadeToggle();
    this.http.get<any>("http://localhost/Ai/hiringSystem/public/api/quizzes/"+id+"/questions").subscribe(
      data=>
      {
        this.questions=data.data
        console.log(this.questions[0].question_body)

      }
    )
  }
  

}
