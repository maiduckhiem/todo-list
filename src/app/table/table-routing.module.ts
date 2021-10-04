import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { TableComponent } from './table.component';

const routes: Routes = [{ path: '', component: TableComponent ,
children:[{
  path:"",
  component:ContentComponent
}]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule { }
