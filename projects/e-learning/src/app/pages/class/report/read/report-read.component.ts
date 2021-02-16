import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportService } from '@bootcamp-elearning/services/report.service';

@Component({
  selector: 'app-report-read',
  templateUrl: './report-read.component.html',
  styleUrls: ['./report-read.component.css']
})
export class ReportReadComponent implements OnInit {
  idDetailClass: string;

  participantScores: any;
  selectedParticipantScore: any[];
  loading: boolean = true;
  activityValues: number[] = [0, 100];

  participantPresences: any;
  rowGroupMetadata: any;

  constructor(private route: ActivatedRoute,
    private reportService: ReportService) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.idDetailClass = param['idDetailClass'];
      this.getAllScore();
      this.getAllPresence();
    })
  }

  getAllScore(): void {
    this.reportService.getAllScore(this.idDetailClass).subscribe(
      res => {
        console.log(res);
        this.participantScores = res.data;
        this.loading = false;
      },
      err => {
        console.log(err);
        this.loading = false;
      }
    )
  }

  getAllPresence(): void {
    this.reportService.getAllPressence(this.idDetailClass).subscribe(
      res => {
        console.log(res);

        // let data = []
        // let uniqueIdDetailModule = [];
        // uniqueIdDetailModule = [...new Set(res.data.map(val => val.detailModule.idModuleRegistration.idModule.id))]

        // uniqueIdDetailModule.forEach(idDetailModule => {
        //   let groupLearningMaterial = {
        //     detailModule: {
        //       id: idDetailModule,
        //       learningMaterials: []
        //     }
        //   }
        //   res.data.forEach(val => {
        //     if (val.detailModule.idModuleRegistration.idModule.id === idDetailModule) {
        //       groupLearningMaterial.detailModule['moduleName'] = val.detailModule.idModuleRegistration.idModule.moduleName;
        //       groupLearningMaterial.detailModule.learningMaterials.push(val.detailModule.idLearningMaterial);
        //     }
        //   })
        //   data.push(groupLearningMaterial);
        // })

        this.participantPresences = res.data;
        console.log(res.data);

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

    // if (this.participantPresences) {
    //   for (let i = 0; i < this.participantPresences.length; i++) {
    //     let rowData = this.participantPresences[i];
    //     let representativeName = rowData.detailModule.moduleName;

    //     if (i == 0) {
    //       this.rowGroupMetadata[representativeName] = { index: 0, size: 1 };
    //     }
    //     else {
    //       let previousRowData = this.participantPresences[i - 1];
    //       let previousRowGroup = previousRowData.detailModule.moduleName;
    //       if (representativeName === previousRowGroup)
    //         this.rowGroupMetadata[representativeName].size++;
    //       else
    //         this.rowGroupMetadata[representativeName] = { index: i, size: 1 };
    //     }
    //   }
    // }



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

  test(idUser: string): void {
    const source = this.reportService.getDetailScore(this.idDetailClass, idUser);
    const link = document.createElement("a");
    link.href = source;
    link.click();
    // let source = this.reportService.getDetailScore(this.idDetailClass, idUser);
  }

}
