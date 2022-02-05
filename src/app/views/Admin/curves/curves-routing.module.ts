import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurvesComponent } from './curves/curves.component';

const routes: Routes = [
  {path:"", component: CurvesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurvesRoutingModule { }
