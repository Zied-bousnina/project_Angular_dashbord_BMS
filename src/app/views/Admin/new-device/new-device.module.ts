import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewDeviceRoutingModule } from './new-device-routing.module';
import { NewDevicesComponent } from './new-devices/new-devices.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NewDevicesComponent
  ],
  imports: [
    CommonModule,
    NewDeviceRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class NewDeviceModule { }
