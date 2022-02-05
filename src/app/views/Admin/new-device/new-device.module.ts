import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewDeviceRoutingModule } from './new-device-routing.module';
import { NewDevicesComponent } from './new-devices/new-devices.component';


@NgModule({
  declarations: [
    NewDevicesComponent
  ],
  imports: [
    CommonModule,
    NewDeviceRoutingModule
  ]
})
export class NewDeviceModule { }
