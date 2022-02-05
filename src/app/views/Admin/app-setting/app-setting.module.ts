import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppSettingRoutingModule } from './app-setting-routing.module';
import { AppSettingComponent } from './app-setting/app-setting.component';


@NgModule({
  declarations: [
    AppSettingComponent
  ],
  imports: [
    CommonModule,
    AppSettingRoutingModule
  ]
})
export class AppSettingModule { }
