import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Grades } from '../../model/grades';
import { GradeService } from '../../service/grade.service';

@Component({
  selector: 'app-nilai',
  templateUrl: './nilai.component.html',
  styleUrls: ['./nilai.component.scss'],
  styles: []
})
export class NilaiComponent implements OnInit {

  productDialog: boolean;
  rangeDates: Date[];
  submitted: boolean;
  update: boolean;

  nilai = new Grades();
  listNilai: Grades[] = []

  constructor(private gradeService: GradeService, private messageService: MessageService, private confirmationService: ConfirmationService) {

  }

  ngOnInit(): void {
    this.getNilai();
  }

  insertNilai(): void {
    this.gradeService.insertGrade(this.nilai).subscribe(val => {
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Nilai telah dibuat.', life: 3000 });
      this.productDialog = false;
    });
  }

  updateNilai(): void {
    this.gradeService.updateGrade(this.nilai).subscribe(val => {
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Nilai telah dibuat.', life: 3000 });
      this.productDialog = false;
    });
  }

  getNilai(): void {
    this.gradeService.getGrades().subscribe(val => {
      this.listNilai = val;
      console.log(val);
    })
  }

  editProduct(grade: Grades) {
    this.nilai = { ...grade };
    this.productDialog = true;
    this.update = true;
  }

  deleteGrade(id: string) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.gradeService.deleteById(id).subscribe(val => {
          this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Nilai telah dihapus.', life: 3000 });
        })
      }
    });
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  openNew() {
    this.nilai.code = null;
    this.nilai.maxScore = null;
    this.nilai.minScore = null;

    // this.nilai=null
    this.productDialog = true;
  }

}
