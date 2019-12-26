import { Injectable } from '@angular/core';
import { answer_object } from '../answer.object';

@Injectable({
  providedIn: 'root'
})
export class AnswersServiceService {

  myAsnwers:answer_object[]=[];
  
  constructor() { }

  onAddedAnswer(answer:answer_object)
  {
    this.myAsnwers.push({answer:answer.answer,answerStatus:answer.answerStatus,question_id:answer.question_id})
  }

  getAllAnswers()
  {
    return this.myAsnwers;
  }
  getAnswer(id)
  {
    let subset =this.myAsnwers.filter(function(answer)
    {
      return answer.question_id==id;
    });

    return subset

  }
}
