import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './main/login/login.component';
import { LogoutComponent } from './main/logout/logout.component';
const routes: Routes = [
  {path:"",redirectTo:"/home",pathMatch:"full"},
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  {path:"login",component:LoginComponent},
  {path:"logout",component:LogoutComponent},
  { path: 'layout', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule) },
  { path: 'table', loadChildren: () => import('./table/table.module').then(m => m.TableModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
