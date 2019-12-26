import { Component, OnInit } from '@angular/core';
import { EmptyPlaceService } from 'src/app/Shared/empty-place.service';
import { CheckAuthService } from 'src/app/auth/check-auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
  emptyPlaces=[];
  isLoggedIn:boolean
  constructor
  (  private places:EmptyPlaceService
    ,private auth:CheckAuthService
    ,private router :Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.isLoggedIn=localStorage.getItem('token') !=null;
    this.emptyPlaces=this.places.getAllPlaces();
    this.auth.authStaus.subscribe(value=>{this.isLoggedIn=value})
  }
 

}
