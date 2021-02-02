import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.css']
})
export class ClassDetailComponent implements OnInit {

  idDetailClass: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idDetailClass = this.route.firstChild.snapshot.params['idDetailClass'];
  }

}
