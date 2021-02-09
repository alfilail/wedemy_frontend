import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssignmentService } from '@bootcamp-elearning/services/assignment.service';
import { AuthService } from '@bootcamp-homepage/services/auth.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  idDetailModuleRegistration: string;
  idDetailClass: string;

  assignments: any[];

  selectedAssignment: any[];
  loading: boolean = true;


  constructor(private route: ActivatedRoute,
    private assignmentService: AssignmentService) { }

  ngOnInit(): void {
    this.route
      .queryParams
      .subscribe(params => {
        this.idDetailModuleRegistration = params['idDtlModuleRgs'];
        this.idDetailClass = params['idDtlClass'];
        this.getScoreAssignment();
      });
  }

  getScoreAssignment(): void {
    let param = {
      idDtlClass: this.idDetailClass,
      idDtlModuleRgs: this.idDetailModuleRegistration
    }
    this.assignmentService.getAssigment(param).subscribe(
      res => {
        this.assignments = res;
        this.loading = false;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }



}
