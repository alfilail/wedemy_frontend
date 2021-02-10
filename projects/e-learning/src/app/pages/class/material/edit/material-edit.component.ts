import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@bootcamp-admin/service/auth.service';
import { DetailModuleRegistration } from '@bootcamp-elearning/models/detail-module-registration';
import { LearningMaterialType } from '@bootcamp-elearning/models/learning-material-type';
import { MaterialService } from '@bootcamp-elearning/services/material.service';

@Component({
  selector: 'app-material-edit',
  templateUrl: './material-edit.component.html',
  styleUrls: ['./material-edit.component.css']
})
export class MaterialEditComponent implements OnInit {
  formData: FormData = new FormData();

  material: any;

  detailModuleRegistration: DetailModuleRegistration = new DetailModuleRegistration();

  materialTypes: LearningMaterialType[];

  materialCode: string;
  materialName: string;
  startDate: any;
  selectedMaterialType: any;
  description: string;
  idDetailModuleRegistration: string;


  constructor(private authService: AuthService,
    private location: Location,
    private materialService: MaterialService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.idDetailModuleRegistration = param['idDetailModuleRegistration'];
      console.log('InI Detail module');

      console.log(this.idDetailModuleRegistration)
      this.formData.append('file', null);
      this.getMaterial();
    })
  }

  getMaterial(): void {
    this.materialService.getMaterial(this.idDetailModuleRegistration).subscribe(
      res => {
        this.material = this.transformModelToRequired(res.data);
        console.log(res);
        this.getMaterialTypes();
      },
      err => {
        console.log(err);
      }
    )
  }

  getMaterialTypes(): void {
    this.materialService.getMaterialTypes().subscribe(
      res => {
        this.materialTypes = res.data;
        this.selectedMaterialType = res.data.filter(val => {
          return val.id === this.material.idLearningMaterial.idLearningMaterialType.id;
        })[0];
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

  transformModelToRequired(model: any): any {
    let idLearningMaterial = model.idLearningMaterial;
    const newModel = {
      id: this.idDetailModuleRegistration,
      orderNumber: model.orderNumber,
      scheduleDate: model.scheduleDate,
      version: model.version,
      idLearningMaterial: {
        id: idLearningMaterial.id,
        createdBy: this.authService.getUserId(),
        code: idLearningMaterial.code,
        learningMaterialName: idLearningMaterial.learningMaterialName,
        description: idLearningMaterial.description,
        version: idLearningMaterial.version,
        idFile: {
          id: idLearningMaterial.idFile.id,
          version: idLearningMaterial.idFile.version
        },
        idLearningMaterialType: {
          id: idLearningMaterial.idLearningMaterialType.id
        }
      }

    }
    return newModel;
  }

  update(): void {
    // this.detailModuleRegistration.orderNumber = 100;
    // this.detailModuleRegistration.version = 0;
    // this.detailModuleRegistration.scheduleDate = this.startDate;
    // this.detailModuleRegistration.idLearningMaterial = {
    //   createdBy: this.authService.getUserId(),
    //   code: this.materialCode,
    //   learningMaterialName: this.materialName,
    //   description: this.description,
    //   idLearningMaterialType: {
    //     id: this.selectedMaterialType.id
    //   }
    // };
    // this.detailModuleRegistration.idModuleRegistration = {
    //   id: this.idModuleRegistration
    // }

    // console.log(this.detailModuleRegistration);


    this.formData.append('body', JSON.stringify(this.material));
    this.materialService.updateMaterial(this.formData).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );

  }

}
