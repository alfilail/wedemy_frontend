import { Location } from '@angular/common';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailModuleRegistration } from '@bootcamp-elearning/models/detail-module-registration';
import { LearningMaterialType } from '@bootcamp-elearning/models/learning-material-type';
import { MaterialService } from '@bootcamp-elearning/services/material.service';
import { AuthService } from '@bootcamp-homepage/services/auth.service';

@Component({
  selector: 'app-material-add',
  templateUrl: './material-add.component.html',
  styleUrls: ['./material-add.component.css']
})
export class MaterialAddComponent implements OnInit {
  formData: FormData = new FormData();

  detailModuleRegistration: DetailModuleRegistration = new DetailModuleRegistration();

  materialTypes: LearningMaterialType[];

  materialCode: string;
  materialName: string;
  startDate: any;
  selectedMaterialType: LearningMaterialType;
  description: string;
  idModuleRegistration: string;

  mtrCodeErrMsg: string;
  mtrNameErrMsg: string;
  startDateErrMsg: string;

  mtrCodeIsValid: boolean;
  mtrNameIsValid: boolean;
  startDateIsValid: boolean;

  selectedFileName: any = "Pilih file";

  mtrCodeClass: string = ""
  mtrNameClass: string = ""
  startDateClass: string = ""

  constructor(private authService: AuthService,
    private location: Location,
    private materialService: MaterialService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.idModuleRegistration = param['idModuleRegistration']
      console.log(param['idModuleRegistration']);

    })
    this.getMaterialTypes();
  }

  getMaterialTypes(): void {
    this.materialService.getMaterialTypes().subscribe(
      res => {
        this.materialTypes = res.data;
        this.selectedMaterialType = res.data[0];
      },
      err => {
        console.log(err);
      }
    )
  }

  setFile(event: any): void {
    let fileList = event.target.files;
    if (fileList) this.formData.append('file', fileList[0]);
    
    this.selectedFileName = fileList[0].name;
  }

  back(): void {
    this.location.back();
  }

  save(): void {
    this.detailModuleRegistration.orderNumber = 100;
    this.detailModuleRegistration.scheduleDate = this.startDate;
    this.detailModuleRegistration.idLearningMaterial = {
      createdBy: this.authService.getUserId(),
      code: this.materialCode,
      learningMaterialName: this.materialName,
      description: this.description,
      idLearningMaterialType: {
        id: this.selectedMaterialType.id
      }
    };
    this.detailModuleRegistration.idModuleRegistration = {
      id: this.idModuleRegistration
    }

    console.log(this.detailModuleRegistration);
    this.formData.append('body', JSON.stringify(this.detailModuleRegistration));
    this.materialService.saveMaterial(this.formData).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );

  }

  mtrCodeValidation(event: string): void {
    if (event.length == 0) {
      this.mtrCodeErrMsg = "Kode materi tidak boleh kosong"
      this.mtrCodeIsValid = false;
      this.mtrCodeClass = "is-invalid"
    } else {
      this.mtrCodeIsValid = true;
      this.mtrCodeClass = ""

      if (event.length > 10) {
        this.mtrCodeErrMsg = "Maksimal 10 karakter"
        this.mtrCodeIsValid = false;
        this.mtrCodeClass = "is-invalid"

      }
    }
  }

  mtrNameValidation(event: string): void {
    if (event.length == 0) {
      this.mtrNameErrMsg = "Nama materi tidak boleh kosong"
      this.mtrNameIsValid = false;
      this.mtrNameClass = "is-invalid"
    } else {
      this.mtrNameIsValid = true;
      this.mtrNameClass = ""

    }
  }

  startDateValidation(event: string): void {
    if (event.length == 0) {
      this.startDateErrMsg = "Tanggal tidak boleh kosong"
      this.startDateIsValid = false;
      this.startDateClass = "is-invalid"
    } else {
      this.startDateIsValid = true;
      this.startDateClass = ""
    }
  }

}
