import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { LayoutComponent } from './layout.component';

const routes: Routes = [{ path: '', component: LayoutComponent ,
children: [{
  path:"", component:ContentComponent
}]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
