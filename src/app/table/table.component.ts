import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Subscription } from 'rxjs';
import { TackService } from '../task.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public categoryId:any;
  public subscript:Subscription;
  public findproduct:any[];

  constructor(private _ActivatedRoute:ActivatedRoute,
        private _MovieService:TackService,
    ) { }

  ngOnInit(): void {
    this.categoryId=this._ActivatedRoute.snapshot.params["id"];

    this.subscript=this._MovieService.getTasks(this.categoryId).subscribe((data:any[]) =>{
      // console.log(data)
     this.findproduct= data;
    },error =>{
      console.log(error);
    })
  }
  ngOnDestroy():void{
    if(this.subscript){
      this.subscript.unsubscribe();
    }
  }
}
