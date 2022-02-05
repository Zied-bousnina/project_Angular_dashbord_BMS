import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewDevicesComponent } from './new-devices/new-devices.component';

const routes: Routes = [
  {path:"", component:NewDevicesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewDeviceRoutingModule { }
