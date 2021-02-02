import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassService } from '@bootcamp-elearning/services/class.service';
import { VIEW_TYPE } from '../../../constants/view-type';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {
  idDetailClass: string;

  viewType = VIEW_TYPE;
  selectedView = VIEW_TYPE.VIEW_ONLY;

  modules: any[] = [];



  constructor(private route: ActivatedRoute,
    private classService: ClassService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getDetail(params['idDetailClass']);
      this.idDetailClass = params['idDetailClass'];
    })

  }

  getDetail(idDetailClass: string): void {
    this.classService.getDetail(idDetailClass).subscribe(
      res => {
        this.modules = res
        console.log(res);

      },
      err => { console.log(err) }
    )
  }

  onChangeOperation(e): void {
    this.selectedView = e;
  }

}
