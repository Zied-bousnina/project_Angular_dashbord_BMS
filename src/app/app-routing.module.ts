import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { LoginComponent } from './layouts/login/login.component';
import { NotfoundComponent } from './views/front/notfound/notfound/notfound.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  // {path:"", component:FrontLayoutComponent},
  {path:"", component:LoginComponent},
  {path:"admin", component:AdminLayoutComponent, canActivate:[AuthGuard],children:[
    {path:"",loadChildren:()=>import('./views/Admin/front-admin/front-admin.module').then(m=>m.FrontAdminModule)},
    {path:"scan",loadChildren:()=>import('./views/Admin/scan-devices/scan-devices.module').then(m=>m.ScanDevicesModule)},
    {path:"newDevices",loadChildren:()=>import('./views/Admin/new-device/new-device.module').then(m=>m.NewDeviceModule)},
    {path:"configuration",loadChildren:()=>import('./views/Admin/configuration-menu/configuration-menu.module').then(m=>m.ConfigurationMenuModule)},
    {path:"appSetting",loadChildren:()=>import('./views/Admin/app-setting/app-setting.module').then(m=>m.AppSettingModule)},
    {path:"connectedDevices",loadChildren:()=>import('./views/Admin/connected-devices/connected-devices.module').then(m=>m.ConnectedDevicesModule)},
    {path:"devicesManagement",loadChildren:()=>import('./views/Admin/devices-management/devices-management.module').then(m=>m.DevicesManagementModule)},
    {path:"curves",loadChildren:()=>import('./views/Admin/curves/curves.module').then(m=>m.CurvesModule)},
    {path:"scan/description/:id",loadChildren:()=>import('./views/Admin/description/description.module').then(m=>m.DescriptionModule)},
    {path:"**",loadChildren:()=>import('./views/front/notfound/notfound.module').then(m=>m.NotfoundModule)}
  ]},
  {path:"**", component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
