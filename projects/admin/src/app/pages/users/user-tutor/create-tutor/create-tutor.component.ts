import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profiles } from '@bootcamp-admin/model/profiles';
import { Roles } from '@bootcamp-admin/model/roles';
import { Users } from '@bootcamp-admin/model/users';
import { UserService } from '@bootcamp-admin/service/user.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-create-tutor',
  templateUrl: './create-tutor.component.html',
  styleUrls: ['./create-tutor.component.scss']
})
export class CreateTutorComponent implements OnInit {

  productDialog: boolean;
  rangeDates: Date[];
  submitted: boolean;
  statuses: any[];

  profile = new Profiles();
  user = new Users();
  role = new Roles();
  roleUser: string;

  constructor(private route: Router, private userService: UserService, private activeRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.roleUser = params['user']
    })
  }

  insertUser(): void {
    console.log(this.roleUser)
    if (this.roleUser == 'tutor') {
      this.role.code = 'TTR';
    } else {
      this.role.code = 'ADM';
    }

    this.user.idProfile = this.profile;
    this.user.idRole = this.role;

    console.log(this.user.idProfile.birthDate)
    this.userService.insertUsers(this.user).subscribe(val => {
      if (this.roleUser == 'tutor') {
        this.route.navigateByUrl('/admin/user-tutor')
      } else {
        this.route.navigateByUrl('/admin/user-admin')
      }
    })
  }

  backButton() {
    if (this.roleUser == 'tutor') {
      this.route.navigateByUrl('/admin/user-tutor')
    } else {
      this.route.navigateByUrl('/admin/user-admin')
    }
  }


}
