import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmptyPlaceService {

  emptyPlaces:{name:string,desc:String,id:number}[]=[
    {name:"Back-End Software Developer",desc:"Some dummy Descrition",id:1},
    {name:"Front-End / Full-Stack Web Developer",desc:"Some dummy Descrition",id:2},
    {name:"Front-End Developer",desc:"Some dummy Descrition",id:3},
    {name:"Database and Web Developer",desc:"Some dummy Descrition",id:4},
    {name:"decision manager",desc:"Some dummy Descrition",id:5},
    {name:"Software instructor",desc:"Some dummy Descrition",id:6},
    {name:"Front-end",desc:"Some dummy Descrition",id:7},
    {name:"FullStack",desc:"Some dummy Descrition",id:8},
    {name:"Data analist",desc:"Some dummy Descrition",id:8}
  ];
  constructor() { }

  getAllPlaces()
  {
    return this.emptyPlaces;
  }

}
