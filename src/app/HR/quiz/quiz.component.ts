import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { QuizzesService } from '../quizzes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quiz:FormGroup;
  quizName:string="";
  quizId:number=0;
  constructor(private singleQuiz:QuizzesService,private router:Router,private route:ActivatedRoute) {

    this.quiz=new FormGroup(
      {
        "quizName":new FormControl(null),
        "quizType":new FormControl("Select Type")
      }
    )




   }

  ngOnInit() {

  }

  onAddQuiz()
  {
    /*
    this.singleQuiz.addQuiz(this.singleQuiz.quizzesLength(),this.quiz.get("quizName").value,this.quiz.get("quizType").value)
    */ 
   
  
   this.singleQuiz.addQuiz({name:this.quiz.get('quizName').value,type:this.quiz.get('quizType').value}).subscribe(
     quizID=>{
        this.quizId=quizID.data.quiz_id;
        this.router.navigate([this.quizId,'question'],{relativeTo:this.route})
      }

   ) 

   

  }
  
  


}
