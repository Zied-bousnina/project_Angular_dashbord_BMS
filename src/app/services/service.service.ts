import { Injectable } from '@angular/core';
import { Admin } from '../classes/admin';
import { Device } from '../classes/device';
import { DescriptionDevice } from '../classes/description-device';

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
  add(device:DescriptionDevice, dev:Device){
    this.devices.push({id:this.devices[this.devices.length -1].id+1,name:dev.name})
    this.desciption.push({id_device:this.devices[this.devices.length -1].id,Name:device.Name, Type:device.Type,signal:device.signal,Range:device.Range,H_Scale:device.H_Scale,L_Scale:device.L_Scale,Unit:device.Unit,Precision:device.Precision })


  }
}
