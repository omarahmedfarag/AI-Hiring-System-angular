import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MessegeService } from '../messege.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestsService } from 'src/app/Shared/requests.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  cv:FormGroup;
  imgSrc:string
  constructor(private messege:MessegeService ,
     private router:Router,
     private route:ActivatedRoute,
     private req:RequestsService
    ) { 
    this.cv=new FormGroup({
      "myCv":new FormControl(null)
    })
  }

  ngOnInit() {
    
  }
  onViewCv()
  {
    this.imgSrc=this.cv.get("myCv").value.split('\\')[2];

  }
  pushRequest()
  {

    this.req.onRequestAdded(localStorage.getItem('token'),this.imgSrc);
    console.log("on CV"+this.imgSrc)
    
  }


}
