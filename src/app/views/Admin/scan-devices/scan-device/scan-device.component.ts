import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/classes/device';
import { ServiceService } from '../../../../services/service.service';

@Component({
  selector: 'app-scan-device',
  templateUrl: './scan-device.component.html',
  styleUrls: ['./scan-device.component.css']
})
export class ScanDeviceComponent implements OnInit {
  device:Device[]=[]

  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.device =this.service.devices
    console.log(this.device)
  }

}
