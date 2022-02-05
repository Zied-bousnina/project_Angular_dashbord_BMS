import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontLayoutComponent } from './front-layout/front-layout.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FrontLayoutComponent,
    AdminLayoutComponent,
    LoginComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
   FormsModule,
   ReactiveFormsModule
  ]
})
export class LayoutsModule { }
