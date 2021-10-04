import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  toggle= true;

  images = {
    url: "https://anhdepblog.com/wp-content/uploads/2020/10/ve-dep-ky-bi-cua-hang-dong-son-doong-9.jpg"
  }  
  hovernav() {
    this.toggle= !this.toggle;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
