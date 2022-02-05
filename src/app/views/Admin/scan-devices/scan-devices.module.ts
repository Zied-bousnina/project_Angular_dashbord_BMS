import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScanDevicesRoutingModule } from './scan-devices-routing.module';
import { ScanDeviceComponent } from './scan-device/scan-device.component';


@NgModule({
  declarations: [
    ScanDeviceComponent
  ],
  imports: [
    CommonModule,
    ScanDevicesRoutingModule
  ]
})
export class ScanDevicesModule { }
