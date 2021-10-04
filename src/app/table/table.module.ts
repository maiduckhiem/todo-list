import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    TableComponent,
    HeaderComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    TableRoutingModule
  ]
})
export class TableModule { }
