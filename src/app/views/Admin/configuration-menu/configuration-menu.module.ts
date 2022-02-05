import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationMenuRoutingModule } from './configuration-menu-routing.module';
import { ConfigurationMenuComponent } from './configuration-menu/configuration-menu.component';


@NgModule({
  declarations: [
    ConfigurationMenuComponent
  ],
  imports: [
    CommonModule,
    ConfigurationMenuRoutingModule
  ]
})
export class ConfigurationMenuModule { }
