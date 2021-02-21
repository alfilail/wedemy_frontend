import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassService } from '@bootcamp-elearning/services/class.service';

@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.css'],
})
export class ClassDetailComponent implements OnInit {
  idDetailClass: string;
  class: any;
  isLoading: boolean = true;

  constructor(private route: ActivatedRoute,
    private classService: ClassService) { }

  ngOnInit(): void {
    console.log("hit thisss")
    this.idDetailClass = this.route.firstChild.snapshot.params['idDetailClass'];
    this.classService.getDetail(this.idDetailClass).subscribe(
      res => {
        console.log(res);
        this.class = res.data;
        this.isLoading = false;
      },
      err => {
        console.log(err);
        this.isLoading = false;
      }
    )
  }

 
}
