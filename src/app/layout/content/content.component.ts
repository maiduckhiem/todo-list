import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  categorys: any[]
  constructor(private categoryService: CategoryService,){}

  ngOnInit() {
    this.getcategory();
  }
  getcategory(){
    this.categoryService.getCategorys().subscribe(data => {
      this.categorys = data;
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
    this.categoryService.removeCategory(id).subscribe(data => {
      this.categorys = this.categorys.filter(item => item.id != data.id);
      this.getcategory();
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
