import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { TackService } from 'src/app/task.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  tasks: any[]
  categoryId: string
  hero: Observable<any>

  constructor(
    private tackService: TackService,
    private route: ActivatedRoute,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }
  ngOnInit() {
    this.hero = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.tackService.getTasks(params.get(this.categoryId)!))
    );
    console.log(this.hero)
  }

  onHandleRemove(id: number) {
    // const checkDelete = window.confirm("co chac muon xoa")
    // if(checkDelete){
    //   this.tackService.removeTack(id).subscribe(data => {
    //     this.tacks = this.tacks.filter(item => item.id != data.id);
    //     this.gettack();
    //   });
    // }
    // this.tackService.removeTasks(id).subscribe(data => {
    //   this.tasks = this.tasks.filter(item => item.id != data.id);
    //   this.gettasks();
    // });

  }
  toggle = true;

  images = {
    url: "https://anhdepblog.com/wp-content/uploads/2020/10/ve-dep-ky-bi-cua-hang-dong-son-doong-9.jpg"
  }
  hovernav() {
    this.toggle = !this.toggle;
  }

}