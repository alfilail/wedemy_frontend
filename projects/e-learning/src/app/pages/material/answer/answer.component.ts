import { AnimationDriver } from '@angular/animations/browser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import METHOD from '@bootcamp-core/constants/method';
import { AnswerService } from '@bootcamp-elearning/services/answer.service';
import { MaterialService } from '@bootcamp-elearning/services/material.service';
import { AuthService } from '@bootcamp-homepage/services/auth.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  answer: any;

  formData: FormData = new FormData();

  idDetailModuleRegistration: string;

  fileNameSelected: string = "Pilih file";
  lastModified: string;
  material: any;
  fileName: string;
  isOverDueDate: boolean;

  constructor(private route: ActivatedRoute,
    private authService: AuthService,
    private answerService: AnswerService,
    private materialService: MaterialService) { }

  ngOnInit(): void {
    this.route
      .queryParams
      .subscribe(params => {
        this.idDetailModuleRegistration = params['idDtlModuleRgs'];
        this.getAnswer();
        // this.getMaterial();
      });
  }

  setFile(event: any): void {
    let fileList = event.target.files;
    if (fileList) this.formData.append('file', fileList[0]);
    this.fileNameSelected = fileList[0].name;
  }

  getAnswer(): void {
    let param = {
      idDtlModuleRgs: this.idDetailModuleRegistration,
      idParticipant: this.authService.getUserId()
    }

    this.answerService.getAnswer(param).subscribe(
      res => {
        console.log('Berhasil mengambil data answer');
        this.answer = res.data;
        this.getLastModified();
        this.getFileName();
        this.checkDueDate();
        console.log(param);
      },
      err => {
        console.log(err);
      }
    )
  }

  uploadAnswer(): void {
    console.log('Tombol Upload di click');

    let payload: Object;
    let method: string;
    if (this.answer.id == "Empty") {
      payload = {
        idDetailModuleRegistration: {
          id: this.idDetailModuleRegistration
        },
        idParticipant: {
          id: this.authService.getUserId()
        }
      }
      method = METHOD.POST;
    } else {
      payload = {
        idFile: {
          id: this.answer.idFile.id
        },
        id: this.answer.id
      }
      method = METHOD.PATCH;
    }

    this.formData.append('body', JSON.stringify(payload));
    console.log(this.formData.get('body'));
    this.answerService.uploadAnswer(this.formData, method).subscribe(
      res => {
        console.log(res);
        this.formData.delete('body');
        this.getAnswer();

      },
      err => {
        console.log(err);
      }
    )
  }

  getLastModified(): void {
    console.log(this.answer)
    if (this.answer != null) {
      if (this.answer.idFile.updatedAt){
        this.lastModified = this.answer.idFile.updatedAt;
      } else if (this.answer.idFile.createdAt){
        this.lastModified = this.answer.idFile.createdAt;
      }
    } else {
      this.lastModified = "Kosong"
    }
    
  }


  getFileName(): void {
    if (this.answer != null) {
      this.fileName = this.answer.idFile.name;
    } else {
      this.fileName = "Kosong";
    }
  }

  getMaterial(): void {
    this.materialService.getMaterial(this.idDetailModuleRegistration).subscribe(
      res => {
        this.material = res.data;
        console.log(res.data);
      },
      err => {
        console.log(err);
      }
    )
  }

  checkDueDate(): void {
    let now = new Date();
    let dueDate = new Date(this.answer.idDetailModuleRegistration.scheduleDate);
    console.log(now);
    console.log(dueDate);
    if (now > dueDate){
      this.isOverDueDate = true;
      console.log("over due date");
    } else {
      this.isOverDueDate = false;
    }
    console.log(this.isOverDueDate);
  }

}
