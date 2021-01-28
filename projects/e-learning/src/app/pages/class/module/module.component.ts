import { Component, OnInit } from '@angular/core';
import { ClassService } from '@bootcamp-elearning/services/class.service';
import { VIEW_TYPE } from '../../../constants/view-type';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {
  viewType = VIEW_TYPE;

  selectedView = VIEW_TYPE.VIEW_ONLY;

  modules: any[] = [];

  constructor(private classService: ClassService) { }

  ngOnInit(): void {
    this.getDetail()

  }

  getDetail(): void {
    this.classService.getDetail().subscribe(
      res => {
        this.modules = res
        console.log(this.modules[0].learningMaterials);

      },
      err => { console.log(err) }
    )
  }

  onChangeOperation(e): void {
    this.selectedView = e;
  }

}
