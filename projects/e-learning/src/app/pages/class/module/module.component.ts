import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassService } from '@bootcamp-elearning/services/class.service';
import { ROLE } from '@bootcamp-homepage/constants/roles';
import { AuthService } from '@bootcamp-homepage/services/auth.service';
import { VIEW_TYPE } from '../../../constants/view-type';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {
  idDetailClass: string;
  roleCode: string;

  roles = ROLE;
  viewType = VIEW_TYPE;
  selectedView = VIEW_TYPE.VIEW_ONLY;

  modules: any[] = [];

  constructor(private route: ActivatedRoute,
    private authService: AuthService,
    private classService: ClassService) { }

  ngOnInit(): void {
    this.roleCode = this.authService.getRole();
    this.route.params.subscribe(params => {
      this.getDetail(params['idDetailClass']);
      this.idDetailClass = params['idDetailClass'];
    })

  }

  getDetail(idDtlClass: string): void {
    let idUser = this.authService.getUserId();
    let params = {
      idUser,
      idDtlClass
    }
    this.classService.getDetail(params).subscribe(
      res => {
        this.modules = res.data;
        console.log(res);

      },
      err => { console.log(err) }
    )
  }

  onChangeOperation(e): void {
    this.selectedView = e;
  }

}
