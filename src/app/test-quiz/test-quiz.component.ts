import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare let $:any
@Component({
  selector: 'app-test-quiz',
  templateUrl: './test-quiz.component.html',
  styleUrls: ['./test-quiz.component.css']
})
export class TestQuizComponent implements OnInit {

  quiz:any;
  questions:any[]=[];
  answers:any[]=[];
  constructor(private http:HttpClient ) { }

  ngOnInit() {
    this.form();
    this.http.get("http://localhost/Ai/hiringSystem/public/api/fullquiz/english").subscribe(
      data=>
      {
        this.quiz=data;
        console.log(this.quiz.id)
        this.http.get<any>("http://localhost/Ai/hiringSystem/public/api/quizzes/"+this.quiz.id+"/questions").subscribe(
          question=>
        {
          this.questions=question.data;
          console.log(this.questions[0].question_body)
          this.http.get<any>("http://localhost/Ai/hiringSystem/public/api/quizzes/"+this.quiz.id+"/questions/"+this.questions[0].question_id+"/answers")
          .subscribe(
            (answers)=>
            {
              this.answers=answers.data
            }
          )
        })
  
      }
     



    )
  }
  private form()
  {
    $(function(){
      var loading = $('#loadbar').hide();
      $(document)
      .ajaxStart(function () {
          loading.show();
      }).ajaxStop(function () {
        loading.hide();
      });
      
      $("label.btn").on('click',function () {
        var choice = $(this).find('input:radio').val();
        $('#loadbar').show();
        $('#quiz').fadeOut();
        setTimeout(function(){
             $( "#answer" ).html(  $(this).checking(choice) );      
              $('#quiz').show();
              $('#loadbar').fadeOut();
             /* something else */
        }, 1500);
      });
  
      let ans = 3;
  
      $.fn.checking = function(ck) {
          if (ck != ans)
              return 'INCORRECT';
          else 
              return 'CORRECT';
      }; 
  });	
  
  }

}
