import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/Shared/requests.service';
import { MessegeService } from 'src/app/Candidate/messege.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  requests:any[];
  approved:boolean=false;
  imgSrc:string="";
  constructor(private req:RequestsService,private mess : MessegeService,private router :Router) { 
   
  } 

  ngOnInit() {
    this.requests=this.req.getRequests();
   
  }
  approve(name)
  {
    this.req.setStatus(name,true);
  }
  disapprove(name)
  {
    this.req.setStatus(name,false);
  }
  view(name)
  {
    let subset =this.requests.filter(function(req)
      {
        return req.name==name;
      });

      this.imgSrc=subset[0].cv;

  }

}
