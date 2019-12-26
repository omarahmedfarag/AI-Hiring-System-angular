import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  requests:{name:string,cv:string,status?:boolean}[]=[];
  constructor() { }
  onRequestAdded(name:string,cv:string)
  {
    this.requests.push({name:name,cv:cv})
  }
  getRequests()
  {
    return this.requests
  }

  setStatus(name,state)
  {
    console.log(this.getReq(name,state))
  }
  getReq(name,state)
  {
    
      let subset =this.requests.filter(function(req)
      {
        return req.name==name;
      });
      subset[0].status=state
      return subset
  
    
  }
  getStatus(name)
  {
    let subset =this.requests.filter(function(req)
      {
        return req.name==name;
      });
      if(subset[0].status)
        return subset[0].status
      else 
        return ;
      

  }
}
