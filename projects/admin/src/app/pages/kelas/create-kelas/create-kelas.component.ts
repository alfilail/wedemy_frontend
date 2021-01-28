import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-create-kelas',
  templateUrl: './create-kelas.component.html',
  styleUrls: ['./create-kelas.component.scss']
})
export class CreateKelasComponent implements OnInit {

  productDialog: boolean;
  rangeDates: Date[];
  submitted: boolean;
  statuses: any[];
  uploadedFiles: any[] = [];
  namaSilabusSelect: string;
  listKelas = [
    { code: 'C001S-JB01', name: 'Java', desc: 'Kelas ini mempelajari seputar java', quota: '25', startDate: '2021-02-01', endDate: '2021-02-28', kodeSilabus: 'MD001JB-M01', namaSilabus: 'Java Basic' },
    { code: 'C002S-JE01', name: 'Java Expert', desc: 'Kelas ini mempelajari tentang java secara expert', quota: '20', startDate: '2021-03-01', endDate: '2021-03-31', kodeSilabus: 'MD001JB-M02', namaSilabus: 'Java Featured' },
    { code: 'C003S-FS01', name: 'Full Stack', desc: 'Kelas ini mempelajari agar menjadi seorang fullstack', quota: '15', startDate: '2021-04-01', endDate: '2021-04-30', kodeSilabus: 'MD002JE-M01', namaSilabus: 'Best Practice Java' },
    { code: 'C001S-JB01', name: 'Java', desc: 'Kelas ini mempelajari seputar java', quota: '25', startDate: '2021-02-01', endDate: '2021-02-28', kodeSilabus: 'MD002JE-M02', namaSilabus: 'Framework Java' },
    { code: 'C002S-JE01', name: 'Java Expert', desc: 'Kelas ini mempelajari tentang java secara expert', quota: '20', startDate: '2021-03-01', endDate: '2021-03-31', kodeSilabus: 'MD003FS-M01', namaSilabus: 'Front End' },
    { code: 'C003S-FS01', name: 'Full Stack', desc: 'Kelas ini mempelajari agar menjadi seorang fullstack', quota: '15', startDate: '2021-04-01', endDate: '2021-04-30', kodeSilabus: 'MD003FS-M02', namaSilabus: 'Back End' },
    { code: 'C001S-JB01', name: 'Java', desc: 'Kelas ini mempelajari seputar java', quota: '25', startDate: '2021-02-01', endDate: '2021-02-28', kodeSilabus: 'MD001JB-M02', namaSilabus: 'Java Featured' },
    { code: 'C002S-JE01', name: 'Java Expert', desc: 'Kelas ini mempelajari tentang java secara expert', quota: '20', startDate: '2021-03-01', endDate: '2021-03-31', kodeSilabus: 'MD001JB-M02', namaSilabus: 'Java Featured' },
    { code: 'C003S-FS01', name: 'Full Stack', desc: 'Kelas ini mempelajari agar menjadi seorang fullstack', quota: '15', startDate: '2021-04-01', endDate: '2021-04-30', kodeSilabus: 'MD001JB-M02', namaSilabus: 'Java Featured' },
    { code: 'C001S-JB01', name: 'Java', desc: 'Kelas ini mempelajari seputar java', quota: '25', startDate: '2021-02-01', endDate: '2021-02-28', kodeSilabus: 'MD001JB-M02', namaSilabus: 'Java Featured' },
    { code: 'C002S-JE01', name: 'Java Expert', desc: 'Kelas ini mempelajari tentang java secara expert', quota: '20', startDate: '2021-03-01', endDate: '2021-03-31', kodeSilabus: 'MD001JB-M02', namaSilabus: 'Java Featured' },
    { code: 'C003S-FS01', name: 'Full Stack', desc: 'Kelas ini mempelajari agar menjadi seorang fullstack', quota: '15', startDate: '2021-04-01', endDate: '2021-04-30', kodeSilabus: 'MD001JB-M02', namaSilabus: 'Java Featured' }
  ]

  kelas: any[] = this.listKelas;

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService) {

  }


  ngOnInit(): void {
  }

  deleteList(index: number): void {
    this.listKelas.splice(index, 1);
  }

}
