import { Component, OnInit } from '@angular/core';
import { VIEW_TYPE } from '../../../constants/view-type';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {
  viewType = VIEW_TYPE;

  selectedView = VIEW_TYPE.VIEW_ONLY;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeOperation(e): void {
    this.selectedView = e;
  }

}
