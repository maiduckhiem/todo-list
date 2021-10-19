import { Component, OnInit } from '@angular/core';
import { TackService } from '../../task.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-tack',
  templateUrl: './add-tack.component.html',
  styleUrls: ['./add-tack.component.css']
})
export class AddTackComponent implements OnInit {
  toggle= true;
  hovernav() {
    this.toggle= !this.toggle;
  }
  images = {
    url: "https://anhdepblog.com/wp-content/uploads/2020/10/ve-dep-ky-bi-cua-hang-dong-son-doong-9.jpg",
    url1:"data:image/png;base64,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"
  }  
  tasks: any = {
    id: 0,
    title: '',
    task: '',
    content:'',
    categoryId:'',
    deadline:Date,
    status:''
  };
  constructor(
    private tackService: TackService,
    private router: Router,
    private fb:FormBuilder
    ) {}

    checkform = this.fb.group({
      "name":["gg"]
    })
    onsubmit(){
      alert("thanh cong")
    }
  ngOnInit(): void {
  }
  onAddTack() {
    
    this.tackService.addTasks(this.tasks).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('/tasks')
      
    })
  }
}