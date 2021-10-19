import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './main/login/login.component';
import { LogoutComponent } from './main/logout/logout.component';
import { AddTackComponent } from './backend/add-tack/add-tack.component';
import { EditTableComponent } from './backend/edit-table/edit-table.component';
import { AddCategoryComponent } from './backend/add-category/add-category.component';
import { EditCategoryComponent } from './backend/edit-category/edit-category.component';
import {ContentComponent} from './table/content/content.component'
const routes: Routes = [
  {path:"",redirectTo:"/home",pathMatch:"full"},
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  { path: 'layout', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule) },
  { path: 'table/:id', loadChildren: () => import('./table/table.module').then(m => m.TableModule) },
  {path:"table",component:ContentComponent},
  {path:"add-category",component:AddCategoryComponent},
  {path:"edit-category",component:EditCategoryComponent},
  {path:"login",component:LoginComponent},
  {path:"logout",component:LogoutComponent},
  {path:"add",component: AddTackComponent},
  {path:"tasks/:id/edit",component: EditTableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
