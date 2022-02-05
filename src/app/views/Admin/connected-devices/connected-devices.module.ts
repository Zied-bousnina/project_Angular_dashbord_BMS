import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectedDevicesRoutingModule } from './connected-devices-routing.module';
import { ConnectedDevicesComponent } from './connected-devices/connected-devices.component';


@NgModule({
  declarations: [
    ConnectedDevicesComponent
  ],
  imports: [
    CommonModule,
    ConnectedDevicesRoutingModule
  ]
})
export class ConnectedDevicesModule { }
