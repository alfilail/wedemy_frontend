import { Component, OnInit } from '@angular/core';
import { Modules } from '@bootcamp-elearning/models/modules';

@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.css']
})
export class ClassDetailComponent implements OnInit {
  description: string = '';
  searchText = '';
  modules: Modules[] = [
    {'id':'', 'moduleName':'Java Basic 1', 'code':''},
    {'id':'', 'moduleName':'Java Basic 2', 'code':''},
    {'id':'', 'moduleName':'Java Basic 3', 'code':''},
    {'id':'', 'moduleName':'Java OOP', 'code':''},
    {'id':'', 'moduleName':'Java Features', 'code':''}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
