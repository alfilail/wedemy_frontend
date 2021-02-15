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

  participants: any;


  // participants = [
  //   {
  //     name: 'Anggi Alberto',
  //     averageValue: 89.0
  //   },
  //   {
  //     name: 'Ibon',
  //     averageValue: 88.0
  //   },
  //   {
  //     name: 'Denkeist',
  //     averageValue: 87.0
  //   },
  //   {
  //     name: 'Nissa',
  //     averageValue: 86.0
  //   },
  //   {
  //     name: 'Boss',
  //     averageValue: 85.0
  //   },
  // ]

  selectedParticipants: any[];


  loading: boolean = true;

  activityValues: number[] = [0, 100];

  constructor(private route: ActivatedRoute,
    private reportService: ReportService) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.idDetailClass = param['idDetailClass'];
      this.getAllScore();
    })
  }

  getAllScore(): void {
    this.reportService.getAllScore(this.idDetailClass).subscribe(
      res => {
        console.log(res);
        this.participants = res.data;
        this.loading = false;
      },
      err => {
        console.log(err);
      }
    )
  }

  test(idUser: string): void {
    const source = this.reportService.getDetailScore(this.idDetailClass, idUser);
    const link = document.createElement("a");
    link.href = source;
    link.click();
    // let source = this.reportService.getDetailScore(this.idDetailClass, idUser);
  }

}
