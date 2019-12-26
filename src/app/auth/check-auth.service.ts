import {EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

;

@Injectable({
  providedIn: 'root'
})
export class CheckAuthService {

  private loogedIn = new BehaviorSubject <boolean>(this.getToken())
  authStaus = this.loogedIn.asObservable();
  constructor(private http:HttpClient) { }
  changAuth(value:boolean)
  {
    this.loogedIn.next(value);
  }
  setToken(value)
  {
     
    localStorage.setItem('token',value);
    
  }
  getToken()
  {
    return (localStorage.getItem('token') !=null);
  }
  removeToken()
  {
    localStorage.removeItem('token');
  }
  getCredentials(email,pass):Observable<any>
  {
    return this.http.post<any>('http://localhost/Ai/hiringSystem/public/api/login',{email:email,password:pass})
   
  }

   getUserName(id):Observable<any>
   {
     return this.http.get('http://localhost/Ai/hiringSystem/public/api/user/'+id);

   }
   register(body):Observable<any>
   {
      return this.http.post("http://localhost/Ai/hiringSystem/public/api/register",body);
    
   
   }



}
