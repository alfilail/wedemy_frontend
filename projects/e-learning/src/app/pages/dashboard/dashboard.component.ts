import { Component, OnInit } from '@angular/core';
import { DashboardService } from '@bootcamp-elearning/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  query: string = '';
  classes: any[] = [];
  instructors: any[] = [];

  results: any[] = [];
  selectedInstructor = 'Semua';

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getMyClass();
  }

  getMyClass(): void {
    this.dashboardService.getMyClass().subscribe(
      res => {
        this.classes = res;
        this.results = res;
        // this.getUniqueInstructor();
        console.log(res);

      },
      err => { console.log(err) }
    )
  }

  getUniqueInstructor(): void {
    // const uniqueInstructors = this.classes.filter((val, i, arr) => {
    //   return arr.indexOf(
    //     arr.find(item =>
    //       item
    //         .idDetailClass
    //         .idClass
    //         .idTutor
    //         .idProfile
    //         .fullName === val
    //           .idDetailClass
    //           .idClass
    //           .idTutor
    //           .idProfile
    //         .fullName
    //     )
    //   ) === i;
    // })

    // const [{
    //   idDetailClass: {
    //     idClass: { idTutor }
    //   }
    // }] = uniqueInstructors
    // console.log('Unique Instructor');
    // console.log(idTutor);

    // this.instructors = idTutor;
    // console.log('getUniqueInstructor');

    // const uniqueInstructors = [...new Set(this.classes.map(item => item.idDetailClass
    //   .idClass
    //   .idTutor
    //   .idProfile.fullName))];
    // console.log(uniqueInstructors);

    // const uniqueInstructors = [];
    // const tmp = new Map();
    // for(const item of this.classes) {
    //   if(!tmp.has(item)) { 
    //     tmp.set(item.idDetailclass)
    //   }
    // }


  }

  search(): void {
    this.results = this.classes.filter((item) => {
      if (this.selectedInstructor == 'Semua') {
        return item
          .idDetailClass
          .idClass
          .className
          .toLowerCase().indexOf(this.query.toLowerCase()) !== -1;
      } else {
        return item
          .idDetailClass
          .idClass
          .className
          .toLowerCase().indexOf(this.query.toLowerCase()) !== -1
          && item.instructor.toLowerCase().indexOf(this.selectedInstructor.toLowerCase()) !== -1;
      }
    })
  }
}
