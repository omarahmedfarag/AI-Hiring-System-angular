import { Component, OnInit } from '@angular/core';
import { CheckAuthService } from '../check-auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userID:number;
  userInfo:FormGroup;
  userName:string;
  errmessege:string;
  constructor(private auth:CheckAuthService,private router:Router,private route:ActivatedRoute) {
    this.userInfo=new FormGroup({
      "name":new FormControl(null,Validators.required),
      "email":new FormControl(null,Validators.email),
      "password":new FormControl(null,Validators.required),
      "password_confirmation":new FormControl(null,Validators.required),

    })
   }

  ngOnInit() {
  }
  onSubmit()
  {

   
   
      this.auth.register(this.userInfo.value).subscribe(
        data=>{
          console.log(data)
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
        },
        ()=>this.errmessege="Some Thing Went Wrong "
      )
  
  
    
    
  }
}
