import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Classes } from '@bootcamp-homepage/models/classes';
import { DetailClasses } from '@bootcamp-homepage/models/detail-classes';
import { Modules } from '@bootcamp-homepage/models/modules';
import { AuthService } from '@bootcamp-homepage/services/auth.service';
import { ClassService } from '@bootcamp-homepage/services/class.service';
import { DetailClassService } from '@bootcamp-homepage/services/detail-class.service';
import { ModuleRegistrationService } from '@bootcamp-homepage/services/module-registration.service';

@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.css']
})
export class ClassDetailComponent implements OnInit {
  
  searchText = '';
  modules: Modules[] = [
    {'id':'', 'moduleName':'Java Basic 1', 'code':''},
    {'id':'', 'moduleName':'Java Basic 2', 'code':''},
    {'id':'', 'moduleName':'Java Basic 3', 'code':''},
    {'id':'', 'moduleName':'Java OOP', 'code':''},
    {'id':'', 'moduleName':'Java Features', 'code':''}
  ];

  listModules: Modules[] = [];
  dtlClass: DetailClasses = new DetailClasses();
  param: string = "";
  countModule: number = 0;
  totalHours: number = 0;
  countMat: number = 0;

  constructor(private router: Router,
    private moduleRgsService: ModuleRegistrationService,
    private dtlClassService: DetailClassService,
    private route: ActivatedRoute,
    private authService: AuthService) 
  { }

  ngOnInit(): void {
    console.log("Helo")
    this.route.params.subscribe(params => {
      this.param = params['idClass'];
      console.log(this.param);
      this.dtlClassService.getById(this.param).subscribe(val => {
        this.dtlClass = val;
        console.log(val)        
        this.moduleRgsService.getByIdClass(this.param).subscribe(res => {
          this.listModules = res;
          this.countModule = this.listModules.length;
          this.countTotalMats();
          console.log('mymy1 '+this.countMat)
          // this.userRole = this.authService.getRole();
          console.log(res);
        })
      })
    });
  }

  countTotalMats(): void{
    this.moduleRgsService.getModuleAndLearningMaterialsByIdDtlClass(this.param)
    .subscribe(res => {
      res.forEach(module => {
        module.learningMaterials.forEach(m => this.countMat++);
        console.log('mymy '+this.countMat);
      })
      this.countTotalHours(this.dtlClass.endTime, this.dtlClass.startTime);
    })
  }

  countTotalHours(endTime: any, startTime: any): void{
    let end = endTime.split(':');
    let endMnt = end[0]*60 + end[1]*1;
    let start = startTime.split(':');
    let startMnt = start[0]*60 + start[1]*1;
    let diff = endMnt-startMnt;
    console.log('diff '+ endMnt)
    this.totalHours = this.countMat*(diff/60);
  }

}
