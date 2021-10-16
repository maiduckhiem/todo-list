import { Component, OnInit } from '@angular/core';
import { TackService } from 'src/app/task.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  tacks: any[]
  constructor(private tackService: TackService,){}
  ngOnInit() {
    this.gettack();
  }
  gettack(){
    this.tackService.getTacks().subscribe(data => {
      this.tacks = data;
    })
  }
  onHandleRemove(id: number) {
    // const checkDelete = window.confirm("co chac muon xoa")
    // if(checkDelete){
    //   this.tackService.removeTack(id).subscribe(data => {
    //     this.tacks = this.tacks.filter(item => item.id != data.id);
    //     this.gettack();
    //   });
    // }
    this.tackService.removeTack(id).subscribe(data => {
      this.tacks = this.tacks.filter(item => item.id != data.id);
      this.gettack();
    });
  
  }
  toggle= true;

  images = {
    url: "https://anhdepblog.com/wp-content/uploads/2020/10/ve-dep-ky-bi-cua-hang-dong-son-doong-9.jpg"
  }  
  hovernav() {
    this.toggle= !this.toggle;
  }

}