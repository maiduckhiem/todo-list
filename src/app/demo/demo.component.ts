import { Component, OnInit } from '@angular/core';
import { postList } from './postList';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnInit {
  constructor() {}
  btn = 'btn ';
  title: string = 'Title demo';
  posts = postList;
  birthday = new Date('2021-09-20');
  ngOnInit(): void {}
  setTitle(event: Event, title: string): void {
    this.title = title;
    console.log(event);
  }
}
