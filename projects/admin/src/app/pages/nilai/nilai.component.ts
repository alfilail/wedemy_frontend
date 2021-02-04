import { Component, OnInit, ɵConsole } from '@angular/core';
import { AuthService } from '@bootcamp-admin/service/auth.service';
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
  idUser: string;

  nilai = new Grades();
  listNilai: Grades[] = []

  constructor(private auth: AuthService, private gradeService: GradeService, private messageService: MessageService, private confirmationService: ConfirmationService) {
    this.idUser = auth.getUserId();
  }

  ngOnInit(): void {
    this.getNilai();
  }

  insertNilai(): void {
    console.log('insert')

    this.gradeService.insertGrade(this.nilai).subscribe(val => {
      // this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Nilai telah dibuat.', life: 3000 });
      this.productDialog = false;
      this.listNilai.push(this.nilai);
    });
  }

  updateNilai(): void {
    console.log('update')
    this.gradeService.updateGrade(this.nilai).subscribe(val => {
      // this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Nilai telah dibuat.', life: 3000 });
      this.productDialog = false;
      this.update = false;
    });
  }

  getNilai(): void {
    this.gradeService.getGrades().subscribe(val => {
      this.listNilai = val.data;
      console.log(val);
    })
  }

  editProduct(grade: Grades) {
    grade.createdAt = null;
    grade.updatedAt = null;
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
        this.gradeService.deleteById(id, this.idUser).subscribe(val => {
          // this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Nilai telah dihapus.', life: 3000 });
        })
      }
    });
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  openNew() {
    this.nilai = new Grades()
    this.update = false;
    this.productDialog = true;
  }

}
