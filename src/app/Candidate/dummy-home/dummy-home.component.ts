import { Component, OnInit } from '@angular/core';
import { CheckAuthService } from 'src/app/auth/check-auth.service';

@Component({
  selector: 'app-dummy-home',
  templateUrl: './dummy-home.component.html',
  styleUrls: ['./dummy-home.component.css']
})
export class DummyHomeComponent implements OnInit {
  isLoggedIn:boolean
  constructor(private auth:CheckAuthService) { }

  ngOnInit() {
    this.auth.authStaus.subscribe(value=>{this.isLoggedIn=value})
  }

}
