import { Injectable } from '@angular/core';
import { Admin } from '../classes/admin';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  devices = [
    {id:1, name:"Monitor_112F021"},
    {id:2, name:"Monitor_112F022"},
    {id:3, name:"Monitor_112F023"}
  ]
  desciption =[
    {id_device:1,Name:"Température Room", Type:"Analog Input",signal:"Courant",Range:"4..20 mA",H_Scale:0,L_Scale:80,Unit:"Pa",Precision:0.00},
    {id_device:1,Name:"Température Room", Type:"Analog Input",signal:"Courant",Range:"4..20 mA",H_Scale:0,L_Scale:80,Unit:"Pa",Precision:0.00},
    {id_device:1,Name:"Température Room", Type:"Analog Input",signal:"Courant",Range:"4..20 mA",H_Scale:0,L_Scale:80,Unit:"Pa",Precision:0.00}
  ]

  Admin =[
    {email:'admin@admin.com',password:'admin'}
  ]
  isadmin:boolean=false



  constructor() { }

  auth(t:boolean){
    this.isadmin =t

  }
}
