import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { QuestionService } from '../question.service';
declare let $:any;
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  answerStatus:string="";
  isThereQuestion:number=0;
  quizForm:FormGroup;
  questionId:number=0;
  questions:any[]=[];

  constructor(private route:ActivatedRoute,private question:QuestionService) {
    this.quizForm=new FormGroup({

      "question":new FormControl()

    })


   }

  ngOnInit() {
    this.questionId=this.route.snapshot.params['id'];
    this.question.getQuestion(this.questionId).subscribe(
      data=>
      {
        this.questions=data.data;
      }
    )

  }

  onAddQuestion()
  {

    this.question.postQuestion({body:this.quizForm.get('question').value},this.questionId).subscribe(()=>
    {
      this.question.getQuestion(this.questionId).subscribe(
        data=>
        {
          
          this.questions=data.data;
        }
      )

    }
     
      
    );
   
  }
  toggleFirst(i)
  {
    this.answerStatus="first";
    if($("#second"+i).css('display')!="none")
    {
      $("#second"+i).fadeToggle()
      setTimeout(()=>{$("#first"+i).fadeToggle();},800)

    }
    else{
      $("#first"+i).fadeToggle();
    }

  }
  toggleSecond(i)
  {
    this.answerStatus="second";
    if($("#first"+i).css('display')!="none")
    {
      $("#first"+i).fadeToggle()
      setTimeout(()=>{$("#second"+i).fadeToggle();},800)
    }
    else
    {
      $("#second"+i).fadeToggle();
    }

  }
}
