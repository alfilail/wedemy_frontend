import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Classes } from '@bootcamp-homepage/models/classes';
import { DetailClasses } from '@bootcamp-homepage/models/detail-classes';
import { ClassService } from '@bootcamp-homepage/services/class.service';
import { DetailClassService } from '@bootcamp-homepage/services/detail-class.service';
import { ModuleRegistrationService } from '@bootcamp-homepage/services/module-registration.service';

@Component({
  selector: 'app-class-read',
  templateUrl: './class-read.component.html',
  styleUrls: ['./class-read.component.css']
})
export class ClassReadComponent implements OnInit {

  searchText = '';
  listClasses: DetailClasses[] = [];
  countModule: number = 0;
  totalHours: number = 0;
  countMat: number = 0;

  constructor(private router: Router,
    private dtlClassService: DetailClassService,
    private moduleRgsService: ModuleRegistrationService,
    public datepipe: DatePipe
    ) { }

  ngOnInit(): void {
    this.dtlClassService.getAll()
      .subscribe(res => {
        console.log(res);
        this.listClasses = res;
        this.listClasses.forEach(c => {
          this.moduleRgsService.getByIdClass(c.id).subscribe(mdl => {
            c.totalModules = mdl.length;
            c.totalHours = 0;
            c.countMats = 0;
            c.status = "";
            this.showStatus(c);
            this.countTotalMats(c);
          })
        })
        // console.log(res);
      });
  }

  showDetail(id: string): void {
    this.router.navigateByUrl(`/class/${id}`);
  }

  countTotalMats(c: DetailClasses): void{
    this.moduleRgsService.getModuleAndLearningMaterialsByIdDtlClass(c.id)
    .subscribe(res => {
      res.forEach(module => {
        module.learningMaterials.forEach(m => c.countMats++);
        console.log('mymy '+ c.countMats);
      })
      this.countTotalHours(c, c.endTime, c.startTime);
    })
  }

  countTotalHours(c: DetailClasses, endTime: any, startTime: any): void{
    let end = endTime.split(':');
    let endMnt = end[0]*60 + end[1]*1;
    let start = startTime.split(':');
    let startMnt = start[0]*60 + start[1]*1;
    let diff = endMnt-startMnt;
    console.log('diff '+ endMnt)
    c.totalHours = c.countMats * (diff/60)
  }

  showStatus(c: DetailClasses): void{
    let today: Date = new Date();
    today.setHours(0, 0, 0, 0);
    let todayFormatted = new Date(this.datepipe.transform(today, 'yyyy-MM-dd'))

    let end = new Date(c.endDate);

    // cek kuota masih ada apa gak
    if(todayFormatted < end) {
      c.status = '1';
      console.log("pendaftaran dibuka");
    } else if (todayFormatted >= end) {
      c.status = '2';
      console.log("telah berakhir");
    }
    console.log('today: '+todayFormatted);
    console.log('start: '+c.startDate);
    console.log('end: '+c.endDate);
  }

}
