import { Component, OnInit } from '@angular/core';
import { LearningMaterialTypes } from '@bootcamp-admin/model/learning-material-types';
import { AuthService } from '@bootcamp-admin/service/auth.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { LearningMaterialTypeService } from '../../service/learning-material-type.service';

@Component({
  selector: 'app-jenis-tugas',
  templateUrl: './jenis-tugas.component.html',
  styleUrls: ['./jenis-tugas.component.scss'],
  styles: [`:host ::ng-deep .p-dialog .product-image {
    width: 150px;
    margin: 0 auto 2rem auto;
    display: block;}`]
})
export class JenisTugasComponent implements OnInit {

  productDialog: boolean;
  rangeDates: Date[];
  submitted: boolean;
  statuses: any[];
  update: boolean;

  listJenisTugas: LearningMaterialTypes[] = []
  learningMaterialType = new LearningMaterialTypes();
  idUser: string;

  constructor(private auth: AuthService, private learningMaterialTypeService: LearningMaterialTypeService, private messageService: MessageService, private confirmationService: ConfirmationService) {
    this.idUser = auth.getUserId()
  }

  ngOnInit(): void {
    this.getLearningMaterialTypes()
  }

  insertLearningMaterialType() {
    this.learningMaterialTypeService.insertLearningMaterialTypes(this.learningMaterialType).subscribe(val => {
      this.productDialog = false;
      this.listJenisTugas.push(this.learningMaterialType);
    })
  }

  updateLearningMaterialType() {
    console.log('update')
    this.learningMaterialTypeService.updateLearningMaterialType(this.learningMaterialType).subscribe(val => {
      this.productDialog = false;
      this.update = false;
      this.removeJenisTugas(this.learningMaterialType.id)
      this.listJenisTugas.push(this.learningMaterialType)
    })
  }

  getLearningMaterialTypes() {
    this.learningMaterialTypeService.getLearningMaterialTypes().subscribe(val => {
      this.listJenisTugas = val.data;
      console.log(val)
    })
  }

  editLearningMaterialType(learningMaterialType: LearningMaterialTypes) {
    learningMaterialType.createdAt = null;
    learningMaterialType.updatedAt = null;
    this.learningMaterialType = { ...learningMaterialType };
    this.productDialog = true;
    this.update = true;
  }

  deleteLearningMaterialType(id: string) {
    this.confirmationService.confirm({
      message: 'Apakah anda yakin ingin menghapus data?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.learningMaterialTypeService.deleteById(id, this.idUser).subscribe(val => {
          this.removeJenisTugas(id);
        })
      }
    });
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  openNew() {
    this.learningMaterialType = new LearningMaterialTypes();
    this.productDialog = true;
    this.update = false;
  }

  removeJenisTugas(id: string): void {
    this.listJenisTugas.forEach((value, index) => {
      if (value.id == id) {
        this.listJenisTugas.splice(index, 1);
      }
    })
  }
}
