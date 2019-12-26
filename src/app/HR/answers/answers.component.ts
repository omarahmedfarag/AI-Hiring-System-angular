import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AnswersServiceService } from './answers-service.service';
import { AnswersService } from '../answers.service';
@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {
  answerGroup:FormGroup;
  @Input()status:string="first";
  answers:any[]=[];
  @Input()questionId:number;
  @Input()quizId:number;
  r="red";
  g="white"
  constructor(private _AnswersServiceService:AnswersServiceService ,private answer :AnswersService) { 
    this.answerGroup=new FormGroup(
      {
        "answer" : new FormControl(null),
        "checked" : new FormControl(false)
      }
    )
  }

  ngOnInit() {

    console.log(this.questionId+" and "+this.quizId)
    this.answer.getAnswers(this.quizId,this.questionId).subscribe(data=>
      {
        this.answers=data.data;
      })


  }


  onAddAnswer()
  {
    this.answer.addAnswers(this.quizId,this.questionId,{body:this.answerGroup.get("answer").value,condition:this.answerGroup.get("checked").value})
    .subscribe()
    this.answerGroup.setValue({"answer":null,"checked":false});
    this.r="red";
    this.g="white";
  }
  onChange()
  {
    if(this.answerGroup.get("checked").value==true)
    {
      this.g="green";
      this.r="white";
    }
    else{
      this.g="white";
      this.r="red";

    }

  }

}
