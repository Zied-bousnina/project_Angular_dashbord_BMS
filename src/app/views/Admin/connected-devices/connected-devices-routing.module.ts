import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectedDevicesComponent } from './connected-devices/connected-devices.component';

const routes: Routes = [
  {path:"", component:ConnectedDevicesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnectedDevicesRoutingModule { }
