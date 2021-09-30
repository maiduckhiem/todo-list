import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  image={
    url:"https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/hero/6a3ccd8e5c9a0e8ebea4235d12da6b24/hero.png",
    url1:"https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/product/89d378b845766a8f0c48e955336266f8/board.png",
    url2:"https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/features/5f90e4a913ac52092f2ac7ff308c45c4/view.svg"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
