import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import API from '@bootcamp-core/constants/api';
import { ROLE } from '@bootcamp-core/constants/role';
import { ReportService } from '@bootcamp-elearning/services/report.service';
import { createElementTagA } from '@bootcamp-elearning/utils/utils';
import { AuthService } from '@bootcamp-homepage/services/auth.service';

@Component({
  selector: 'app-report-read',
  templateUrl: './report-read.component.html',
  styleUrls: ['./report-read.component.css']
})
export class ReportReadComponent implements OnInit {
  ROLES = ROLE;
  idDetailClass: string;
  roleCode: string;
  idUser: string = '';

  participantScores: any;
  selectedParticipantScore: any[];
  loadingParicipantScore: boolean = true;
  activityValues: number[] = [0, 100];

  participantPresences: any;
  loadingParicipantPresence: boolean = true;
  rowGroupMetadata: any;

  constructor(private route: ActivatedRoute,
    private reportService: ReportService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.roleCode = this.authService.getRole();
    if (this.roleCode === this.ROLES.TUTOR) {
      this.route.params.subscribe(param => {
        this.idDetailClass = param['idDetailClass'];
        this.getAllScore();
        this.getAllPresence();
      })
    } else {
      this.route.params.subscribe(param => this.idDetailClass = param['idDetailClass'])
      this.idUser = this.authService.getUserId();
    }
  }

  getAllScore(): void {
    this.reportService.getAllScore(this.idDetailClass).subscribe(
      res => {
        console.log(res);
        this.participantScores = res.data;
        this.loadingParicipantScore = false;
      },
      err => {
        console.log(err);
        this.loadingParicipantScore = false;
      }
    )
  }

  getAllPresence(): void {
    this.reportService.getAllPressence(this.idDetailClass).subscribe(
      res => {
        this.participantPresences = res.data;
        console.log(res);
        this.loadingParicipantPresence = false;
        this.updateRowGroupMetaData();
      },
      err => {
        console.log(err);
      }
    )
  }

  onSort() {
    this.updateRowGroupMetaData();
  }

  updateRowGroupMetaData() {
    this.rowGroupMetadata = {};

    if (this.participantPresences) {
      for (let i = 0; i < this.participantPresences.length; i++) {
        let rowData = this.participantPresences[i];
        let representativeName = rowData.detailModule.idModuleRegistration.idModule.moduleName;

        if (i == 0) {
          this.rowGroupMetadata[representativeName] = { index: 0, size: 1 };
        }
        else {
          let previousRowData = this.participantPresences[i - 1];
          let previousRowGroup = previousRowData.detailModule.idModuleRegistration.idModule.moduleName;
          if (representativeName === previousRowGroup)
            this.rowGroupMetadata[representativeName].size++;
          else
            this.rowGroupMetadata[representativeName] = { index: i, size: 1 };
        }
      }
    }
  }

  getPresenceReportByIdModuleRgs(idDtlModuleRgs: string): void {
    let url = `${API.WEDEMY_HOST_DOMAIN}${API.WEDEMY_REPORT_DETAIL_PRESENCE_QUERY_PATH}?idDtlClass=${this.idDetailClass}&idDtlModuleRgs=${idDtlModuleRgs}`;
    let link = createElementTagA(url);
    link.target = '_blank';
    link.click();
  }

  getPresenceReport(): void {
    let url = `${API.WEDEMY_HOST_DOMAIN}${API.WEDEMY_REPORT_PRESENCE_QUERY_PATH}/${this.idDetailClass}`;
    let link = createElementTagA(url);
    link.target = '_blank';
    link.click();
  }

  getScoreReport(idUser: string): void {
    let url: string;
    if (this.idUser === '') {
      url = this.reportService.getDetailScore(this.idDetailClass, idUser)
    } else {
      url = this.reportService.getDetailScore(this.idDetailClass, this.idUser)
    }
    let link = createElementTagA(url);
    console.log(url);

    link.target = '_blank';
    link.click();
  }

  test(idUser: string): void {
    const source = this.reportService.getDetailScore(this.idDetailClass, idUser);
    const link = document.createElement("a");
    link.href = source;
    link.target = '_blank'

    link.click();
    // let source = this.reportService.getDetailScore(this.idDetailClass, idUser);
  }

  getCertified(): void {
    console.log(this.authService.getUserId());

  }

}
