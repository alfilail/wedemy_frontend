import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profiles } from '@bootcamp-admin/model/profiles';
import { Users } from '@bootcamp-admin/model/users';
import { AuthService } from '@bootcamp-admin/service/auth.service';
import { ProfileService } from '@bootcamp-admin/service/profile.service';
import { UserService } from '@bootcamp-admin/service/user.service';
import { MessageService } from 'primeng/api';
import * as moment from 'moment';

@Component({
  selector: 'app-pengaturan',
  templateUrl: './pengaturan.component.html',
  styleUrls: ['./pengaturan.component.scss']
})
export class PengaturanComponent implements OnInit {

  formData: FormData = new FormData();
  file: String;

  active: string;
  user: Users = new Users();
  birthDate: Date = new Date();
  profile: Profiles = new Profiles();

  idProfile: string;
  idUser: string;
  username: string;

  pass: string;
  passConf: string;

  defaultImg: string = "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg";
  url: any = "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg";


  nomorKtpValid: boolean;
  nomorKtpErrMsg: string;

  phoneNumValid: boolean;
  phoneNumErrMsg: string;

  alamatValid: boolean;
  alamatErrMsg: string;

  birthPlaceValid: boolean;
  birthPlaceErrMsg: string;

  birthDateValid: boolean;
  birthDateErrMsg; string;

  nameValid: boolean;
  nameErrMsg: string;

  passwordValid: boolean;
  passwordErrMsg: string;

  repeatPasswordValid: boolean;
  repeatPasswordErrMsg: string;

  constructor(private messageService: MessageService, private userService: UserService, private auth: AuthService, private router: Router, private profileService: ProfileService) {

  }

  ngOnInit(): void {
    this.idProfile = this.auth.getProfileId();
    this.idUser = this.auth.getUserId();
    this.username = this.auth.getUsername();
    this.getProfile();
    this.getUser();
  }

  click(url: string) {
    this.active = url;
  }

  getProfile(): void {
    this.profileService.getProfileById(this.idProfile).subscribe(val => {
      this.profile = val.data;
      console.log(val.data)
      if (val.data.idFile.file) {
        this.url = 'data:image/png;base64,' + val.data.idFile.file
      }
    })
  }

  getUser(): void {
    this.userService.getUserById(this.idUser).subscribe(val => {
      this.user = val.data;
      this.user.idProfile = val.data.idProfile
    })
  }

  getFile(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      console.log(file, 'heheh');
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

  updateProfile() {
    this.profile.birthDate = this.formatDate(this.birthDate)
    this.profile.id = this.auth.getProfileId();
    this.profile.updatedBy = this.auth.getProfileId()

    console.log(this.profile)
    this.formData.append('body', JSON.stringify(this.profile));
    this.profileService.updateProfile(this.formData).subscribe(val => { })
  }

  updatePassword(): void {
    if (this.pass != this.passConf) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: "Password tidak sama" })
    } else {
      this.user.userPassword = this.pass
      this.userService.updateUser(this.user).subscribe(val => { })
    }
  }

  formatDate(str: Date): string {
    let format = moment(str).format('YYYY-MM-DD');
    return format;
  }

  validation(event: string, col: string) {
    if (event.length == 0) {
      if (col == 'ktp') {
        this.nomorKtpValid = false;
        this.nomorKtpErrMsg = 'nomor ktp tidak boleh kosong'
      } else if (col == 'nama') {
        this.nameValid = false;
        this.nameErrMsg = 'nama tidak boleh kosong'
      } else if (col == 'alamat') {
        this.alamatValid = false;
        this.alamatErrMsg = 'alamat tidak boleh kosong'
      } else if (col == 'numPhone') {
        this.phoneNumValid = false;
        this.phoneNumErrMsg = 'nomor ponsel tidak boleh kosong'
      } else if (col == 'birthPlace') {
        this.birthPlaceValid = false;
        this.birthPlaceErrMsg = 'tempat lahir tidak boleh kosong'
      } else if (col == 'birthDate') {
        this.birthDateValid = false;
        this.birthDateErrMsg = 'tanggal lahir tidak boleh kosong'
      } else if (col == 'confPass') {
        this.repeatPasswordValid = false;
        this.repeatPasswordErrMsg = 'password tidak boleh kosong'
      }
    } else {
      if (col == 'pass') {
        if (event.length < 8) {
          this.passwordValid = false;
          this.passwordErrMsg = 'password minimal 8 karakter'
        } else {
          this.pass = event;
          this.passwordValid = true;
        }
      } else if (col == 'passConf') {
        if (event != this.pass) {
          this.repeatPasswordValid = false;
          this.repeatPasswordErrMsg = 'password tidak sama'
        } else {
          this.repeatPasswordValid = true;
        }
      } else if (col == 'ktp') {
        if (event.length < 16 || event.length > 16) {
          this.nomorKtpValid = false;
          this.nomorKtpErrMsg = 'nomor ktp harus memiliki 16 karakter'
        } else {
          this.nomorKtpValid = true;
        }
      } else if (col == 'nama') {
        if (event.length < 4) {
          this.nameValid = false;
          this.nameErrMsg = 'nama terlalu pendek'
        } else {
          this.nameValid = true;
        }
      } else if (col == 'alamat') {
        if (event.length < 10) {
          this.alamatValid = false;
          this.alamatErrMsg = 'alamat tidak boleh kurang dari 10 karakter'
        } else {
          this.alamatValid = true;
        }
      } else if (col == 'numPhone') {
        if (event.length < 11) {
          this.phoneNumValid = false;
          this.phoneNumErrMsg = 'nomor ponsel minimal 11 karakter'
        } else if (event.length > 12) {
          this.phoneNumValid = false;
          this.phoneNumErrMsg = 'nomor ponsel tidak bisa lebih dari 12 karakter'
        } else {
          this.phoneNumValid = true;
        }
      } else if (col == 'birthPlace') {
        if (event.length < 3) {
          this.birthPlaceValid = false;
          this.birthPlaceErrMsg = 'tempat lahir terlalu pendek'
        } else {
          this.birthPlaceValid = true;
        }
      } else if (col == 'birthDate') {
        this.birthDateValid = true;
      }
    }
  }
}
