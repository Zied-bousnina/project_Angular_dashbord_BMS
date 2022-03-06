import { DescriptionDevice } from './../../../../classes/description-device';
import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/classes/device';
import { ServiceService } from '../../../../services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-devices',
  templateUrl: './new-devices.component.html',
  styleUrls: ['./new-devices.component.css']
})
export class NewDevicesComponent implements OnInit {

  newDevice = new DescriptionDevice()
  dev = new Device()

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
  }
  add(device:any, dev:any){
    this.service.add(device,dev)
    console.log(device)
    console.log(dev)


  }

}
