import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModuleComponent } from '../module/module.component';

@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.css']
})
export class ClassDetailComponent implements OnInit, AfterViewInit {
  @ViewChild(ModuleComponent) modules;

  idDetailClass: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idDetailClass = this.route.firstChild.snapshot.params['idDetailClass'];
  }

  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
  }
}
