import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CheckAuthService } from 'src/app/auth/check-auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {
  isLoggedIn:boolean=false;
  constructor(private auth:CheckAuthService,
     private router :Router ,
      private route:ActivatedRoute,
      private http:HttpClient) { }

  ngOnInit() {


    this.auth.authStaus.subscribe(status=>{this.isLoggedIn=status} )
    console.log("The user is "+this.isLoggedIn)
    
    
  }
  onLogOut()
  {

    this.auth.removeToken();
    this.auth.changAuth(false);
    this.router.navigate([''])
  }
  onSignUp()
  {
      this.router.navigate(['register'],{relativeTo:this.route})
      //this.auth.register();
  }
  

}
