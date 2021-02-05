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

  active: string;
  user: Users = new Users();
  birthDate: Date = new Date();
  profile: Profiles = new Profiles();

  idProfile: string;
  idUser: string;
  username: string;

  pass: string;
  passConf: string;

  constructor(private messageService: MessageService, private userService: UserService, private auth: AuthService, private router: Router, private profileService: ProfileService) {

  }

  ngOnInit(): void {
    this.idProfile = this.auth.getProfileId();
    this.idUser = this.auth.getUserId();
    this.username = this.auth.getUsername();
    this.getProfile();
    this.getUser();
    console.log(this.profile.idNumber)
  }

  click(url: string) {
    this.active = url;
  }

  getProfile(): void {
    this.profileService.getProfileById(this.idProfile).subscribe(val => {
      this.profile = val.data;
    })
  }

  getUser(): void {
    this.userService.getUserById(this.idUser).subscribe(val => {
      this.user = val.data;
      this.user.idProfile = val.data.idProfile
    })
  }

  updateProfile() {
    this.profile.birthDate = this.formatDate(this.birthDate)
    this.profile.id = this.auth.getProfileId();
    this.profileService.updateProfile(this.profile).subscribe(val => { })
  }

  updatePassword(): void {
    if (this.pass != this.passConf) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: "Password harus sama!" })
    } else {
      this.user.userPassword = this.pass
      this.userService.updateUser(this.user).subscribe(val => { })
    }
  }

  formatDate(str: Date): string {
    let format = moment(str).format('YYYY-MM-DD');
    return format;
  }

}
