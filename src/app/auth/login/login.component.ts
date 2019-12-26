import { Component, OnInit } from '@angular/core';
import { CheckAuthService } from '../check-auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userInfo:FormGroup;
  errmessege:string;
  userID:number;
  userName:string
  constructor(private auth:CheckAuthService,private router:Router,private route:ActivatedRoute) { 

    this.userInfo=new FormGroup({
      "userName":new FormControl(null),
      "userPassword":new FormControl(null),
      "admin":new FormControl(null)
    })


  }
  
  ngOnInit() {
  }
  loggIn()
  {
    
    if(this.userInfo.get("admin").value)
    {
      this.router.navigate(['/admin'],{relativeTo:this.route})
    }
    else
    {
      this.auth.
      getCredentials(this.userInfo.get("userName").value,this.userInfo.get("userPassword").value)
      .subscribe(data=>{
        if(data.message !== undefined)
        {
          this.errmessege="Wrong Email or Password";
        }
        else{

          this.userID=data.User.id;
          this.auth.getUserName(this.userID).subscribe(
            name=>
            {
              this.userName=name.name
              this.auth.setToken(this.userName);
              this.auth.changAuth(true);
              this.router.navigate([''],{relativeTo:this.route})
            }
          )
          
        }
      }
      ,
      err=>this.errmessege="Email Is invalid")
      
     

    }
  

    
  }

}
