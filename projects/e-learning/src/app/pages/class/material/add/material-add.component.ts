import { Location } from '@angular/common';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailModuleRegistration } from '@bootcamp-elearning/models/detail-module-registration';
import { LearningMaterialType } from '@bootcamp-elearning/models/learning-material-type';
import { MaterialService } from '@bootcamp-elearning/services/material.service';

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


  constructor(private location: Location,
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
        this.materialTypes = res;
        this.selectedMaterialType = res[0];
      },
      err => {
        console.log(err);
      }
    )
  }

  setFile(event: any): void {
    let fileList = event.target.files;
    if (fileList) this.formData.append('file', fileList[0]);
  }

  back(): void {
    this.location.back();
  }

  save(): void {
    this.detailModuleRegistration.orderNumber = 100;
    this.detailModuleRegistration.scheduleDate = this.startDate;
    this.detailModuleRegistration.idLearningMaterial = {
      createdBy: "867e7cf8-ae28-4239-bcf2-b8acd235c121",
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

}
