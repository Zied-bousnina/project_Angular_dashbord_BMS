import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevicesManagementRoutingModule } from './devices-management-routing.module';
import { DevicesManagementComponent } from './devices-management/devices-management.component';


@NgModule({
  declarations: [
    DevicesManagementComponent
  ],
  imports: [
    CommonModule,
    DevicesManagementRoutingModule
  ]
})
export class DevicesManagementModule { }
