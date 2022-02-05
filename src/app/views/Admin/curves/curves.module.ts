import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurvesRoutingModule } from './curves-routing.module';
import { CurvesComponent } from './curves/curves.component';


@NgModule({
  declarations: [
    CurvesComponent
  ],
  imports: [
    CommonModule,
    CurvesRoutingModule
  ]
})
export class CurvesModule { }
