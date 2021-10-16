import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './main/login/login.component';
import { LogoutComponent } from './main/logout/logout.component';
import { AddTackComponent } from './backend/add-tack/add-tack.component';
import { TackService } from './task.service';
import { HttpClientModule } from '@angular/common/http';
import { EditTableComponent } from './backend/edit-table/edit-table.component';
import { AddCategoryComponent } from './backend/add-category/add-category.component';
import { EditCategoryComponent } from './backend/edit-category/edit-category.component';
@NgModule({
  declarations: [AppComponent, LoginComponent, LogoutComponent, AddTackComponent, EditTableComponent, AddCategoryComponent, EditCategoryComponent],
  imports: [BrowserModule,AppRoutingModule,FormsModule,HttpClientModule],
  providers: [TackService],
  bootstrap: [AppComponent],
})
export class AppModule {}
