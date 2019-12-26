import { Component, OnInit } from '@angular/core';
import { MessegeService } from '../messege.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RequestsService } from 'src/app/Shared/requests.service';
@Component({
  selector: 'app-messege',
  templateUrl: './messege.component.html',
  styleUrls: ['./messege.component.css']
})
export class MessegeComponent implements OnInit {
  done:boolean=false;
  approved:boolean=false;
  clicked:boolean;
  constructor(private messege:MessegeService
    ,private route :ActivatedRoute
    ,private req:RequestsService
    ,private router:Router
    ) {
    
   }

  ngOnInit() {
    
    this.route.queryParams.subscribe((param:Params)=>{this.done=param.Uploaded})
    if(this.req.getStatus(localStorage.getItem('token'))!=null && !this.done)
    {
      console.log("S")
      this.approved = this.req.getStatus(localStorage.getItem('token'))
    }
  
  }
 
  obser()
  {
    this.clicked=true;
  }
  startQuiz()
  {
    this.router.navigate(['../test-quiz'],{relativeTo:this.route})

  }
 
 
}
