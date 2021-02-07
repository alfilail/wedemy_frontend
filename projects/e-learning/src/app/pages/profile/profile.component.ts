import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { User } from '@bootcamp-elearning/models/user';
import { ProfileService } from '@bootcamp-elearning/services/profile.service';
import { UserService } from '@bootcamp-elearning/services/user.service';
import { AuthService } from '@bootcamp-homepage/services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  myAccount: User = new User();
  displayMaximizable: boolean;
  defaultImg: string = "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg";
  url: any = "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg";
  uploadForm: FormGroup; 
  formData = new FormData();
  file: String;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private profileService: ProfileService,
    private datepipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.userService.getUserById(this.authService.getUserId()).subscribe(res => {
      console.log(res);
      this.myAccount = res.data;
    })
  }

  showMaximizableDialog() {
    if(this.myAccount.idProfile.idFile.file) {
      this.url = 'data:image/png;base64,'+this.myAccount.idProfile.idFile.file
    }
    this.displayMaximizable = true;
  }

  onSelectFile(event) { 

    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      console.log(file);
      let data: FormData = new FormData();
      data.append('file', file);
      this.formData = data;
      this.file = file.name;
    }

    if (event.target.files.length > 0) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event) => { 
        this.url = event.target.result;
      }
    }
  }

  onSubmit() {
    if (this.myAccount.idProfile.birthDate){
      let birthDateFormatted = this.datepipe.transform(this.myAccount.idProfile.birthDate, 'yyyy-MM-dd')
      this.myAccount.idProfile.birthDate = birthDateFormatted.toString();
    } 
 
    this.formData.append('body', JSON.stringify(this.myAccount.idProfile));
    console.log(this.formData.get('body'))
    this.profileService.updateProfile(this.formData).subscribe(res => {
      this.myAccount.idProfile = res.data;
    })
  }


}
