import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnswerService } from '@bootcamp-elearning/services/answer.service';
import { AuthService } from '@bootcamp-homepage/services/auth.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
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
    console.log(param);


    this.answerService.getAnswer(param).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);

      }
    )
  }

  uploadAnswer(): void {
    let payload = {

      idDetailModuleRegistration: {
        id: this.idDetailModuleRegistration
      },
      idParticipant: {
        id: this.authService.getUserId()
      }
    }

    this.formData.append('body', JSON.stringify(payload));
    this.answerService.uploadAnswer(this.formData).subscribe(
      res => {
        console.log(res);

      },
      err => {
        console.log(err);

      }
    )
  }



}
