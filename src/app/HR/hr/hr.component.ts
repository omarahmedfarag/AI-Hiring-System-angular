import { Component, OnInit } from '@angular/core';
import { MessegeService } from 'src/app/Candidate/messege.service';

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.css']
})
export class HRComponent implements OnInit {
  request:boolean=false;
  subscription:any;
  constructor(private messege:MessegeService) { 

   
 }

  ngOnInit() {
   
   
    

  }


}
