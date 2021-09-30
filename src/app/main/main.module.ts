import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    MainComponent,
    LogoutComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
