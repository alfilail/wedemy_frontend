import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassEnrollments } from '@bootcamp-homepage/models/class-enrollments';
import { Classes } from '@bootcamp-homepage/models/classes';
import { DetailClasses } from '@bootcamp-homepage/models/detail-classes';
import { Modules } from '@bootcamp-homepage/models/modules';
import { AuthService } from '@bootcamp-homepage/services/auth.service';
import { ClassEnrollmentService } from '@bootcamp-homepage/services/class-enrollment.service';
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
  listModules: Modules[] = [];
  dtlClass: DetailClasses = new DetailClasses();
  param: string = "";
  countModule: number = 0;
  totalHours: number = 0;
  countMat: number = 0;
  isLoggedOut: boolean;
  display: boolean = false;
  confirm: boolean = false;
  classEnrollmentSelected: ClassEnrollments = new ClassEnrollments();

  constructor(private router: Router,
    private moduleRgsService: ModuleRegistrationService,
    private dtlClassService: DetailClassService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private classEnrollmentService: ClassEnrollmentService) 
  { }

  ngOnInit(): void {
    this.isLoggedOut = !this.authService.getToken();
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

  enrollNow(): void {
    if(this.isLoggedOut){
      this.display = true;
      // show dialog to login
    } else if(!this.isLoggedOut){
      //create enrollment class
      this.confirm = true;
      console.log("udah login")
    }
  }

  enrollClass(): void {
    this.classEnrollmentSelected.createdBy = this.authService.getUserId();
    this.classEnrollmentSelected.idDetailClass.id = this.dtlClass.id; 
    this.classEnrollmentSelected.idUser.id = this.authService.getUserId();
    this.classEnrollmentService.insertClassEnrollment(this.classEnrollmentSelected)
    .subscribe(res => {
      console.log(this.classEnrollmentSelected);
      console.log(res);
    })
  }

  closeDialog(): void {
    this.confirm = false;
    this.display = false;
  }


}
