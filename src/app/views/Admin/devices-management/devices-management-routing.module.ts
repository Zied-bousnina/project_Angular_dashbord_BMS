import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevicesManagementComponent } from './devices-management/devices-management.component';

const routes: Routes = [
  {path:"", component:DevicesManagementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevicesManagementRoutingModule { }
