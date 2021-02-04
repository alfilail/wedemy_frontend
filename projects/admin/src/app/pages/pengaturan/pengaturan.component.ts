import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '@bootcamp-admin/model/users';
import { AuthService } from '@bootcamp-admin/service/auth.service';
import { UserService } from '@bootcamp-admin/service/user.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-pengaturan',
  templateUrl: './pengaturan.component.html',
  styleUrls: ['./pengaturan.component.scss']
})
export class PengaturanComponent implements OnInit {

  active: string;
  user: Users = new Users();
  idUser: string;

  constructor(private userService: UserService) {
    let auth: AuthService = new AuthService();
    this.idUser = auth.getUserId();
  }

  ngOnInit(): void {
    this.getUser();
  }


  click(url: string) {
    this.active = url;
  }

  getUser(): void {
    this.userService.getUserById(this.idUser).subscribe(val => {
      this.user = val.data;
    })
  }

}
