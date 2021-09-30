import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './main/login/login.component';
import { LogoutComponent } from './main/logout/logout.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, LogoutComponent],
  imports: [BrowserModule,AppRoutingModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
