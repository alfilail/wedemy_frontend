import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssignmentService } from '@bootcamp-elearning/services/assignment.service';
import { downloadFile } from '@bootcamp-elearning/utils/download';

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
        this.assignments = res.data;
        this.loading = false;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }

  refactorModelScore(model: any[]): any[] {
    let refactModelNewScore = [];
    let refactModelUpdateScore = [];
    model.forEach(val => {
      if (val.idAssignmentSubmission.id !== 'Empty') {
        if (val.id === 'Empty') {
          refactModelNewScore.push({
            id: val.id,
            idAssignmentSubmission: {
              id: val.idAssignmentSubmission.id,
              idDetailModuleRegistration: {
                id: this.idDetailModuleRegistration
              },
              idParticipant: {
                id: val.idAssignmentSubmission.idParticipant.id
              }
            },
            version: val.version,
            score: val.score
          })
        } else {
          refactModelUpdateScore.push({
            id: val.id,
            idAssignmentSubmission: {
              id: val.idAssignmentSubmission.id,
              idDetailModuleRegistration: {
                id: this.idDetailModuleRegistration
              },
              idParticipant: {
                id: val.idAssignmentSubmission.idParticipant.id
              }
            },
            version: val.version,
            score: val.score
          })
        }

      }
    })
    console.log('new score');
    console.log(refactModelNewScore);
    console.log('update score');
    console.log(refactModelUpdateScore);
    return [refactModelNewScore, refactModelUpdateScore];
  }

  onChangeScore(event): void {
    console.log('Event Onchange Score')
    console.log(event);
    console.log(this.assignments)

  }

  check(): void {
    this.refactorModelScore(this.assignments);
  }

  setAssignmentScore(): void {
    console.log('Aku ditekan!');

    let res = this.refactorModelScore(this.assignments);
    this.assignmentService.setScoreAssignment(res[0], res[1]).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }

  downloadFileFromBlob(data: File, fileName): void {
    downloadFile(data, fileName);
  }

}
