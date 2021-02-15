import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import METHOD from '@bootcamp-core/constants/method';
import { AnswerService } from '@bootcamp-elearning/services/answer.service';
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

  constructor(private route: ActivatedRoute,
    private authService: AuthService,
    private answerService: AnswerService) { }

  ngOnInit(): void {
    this.route
      .queryParams
      .subscribe(params => {
        this.idDetailModuleRegistration = params['idDtlModuleRgs'];
        this.getAnswer();
      });
  }

  setFile(event: any): void {
    let fileList = event.target.files;
    if (fileList) this.formData.append('file', fileList[0]);
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
        console.log(res);
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
    if (!this.answer) {
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
        }
      }
      method = METHOD.PATCH;
    }

    this.formData.append('body', JSON.stringify(payload));
    this.answerService.uploadAnswer(this.formData, method).subscribe(
      res => {
        console.log(res);
        this.getAnswer();
      },
      err => {
        console.log(err);
      }
    )
  }

}
