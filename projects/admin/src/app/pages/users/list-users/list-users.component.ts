import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '@bootcamp-admin/model/users';
import { AuthService } from '@bootcamp-admin/service/auth.service';
import { UserService } from '@bootcamp-admin/service/user.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {


  productDialog: boolean;
  rangeDates: Date[];
  submitted: boolean;
  statuses: any[];
  user: Users;
  listUsers: Users[] = [];
  isSuperAdmin: boolean;
  isTutor: boolean;

  idUser: string
  role: string;
  selectedRole: string;

  constructor(private activateRoute: ActivatedRoute, private auth: AuthService, private route: Router, private userService: UserService, private confirmationService: ConfirmationService) {

  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      this.isSuperAdmin = false;
      this.isTutor = false;

      this.role = params['role'];
      this.getUserByCode();
      this.idUser = this.auth.getUserId()


      if (this.role == 'ADM') {
        this.selectedRole = 'Admin'
      } else if (this.role == 'PCP') {
        this.selectedRole = 'Peserta'
      } else {
        this.selectedRole = 'Pengajar'
        this.isTutor = true;
      }

      if (this.auth.getRole() == 'ADM') {
        this.isSuperAdmin = false;
      } else {
        this.isSuperAdmin = true;
      }
      console.log(this.isTutor, 'tutor', this.isSuperAdmin, 'superadm')
    })
  }

  createUser() {
    if (this.isTutor == true) {
      this.route.navigateByUrl(`/admin/create/${'tutor'}`)
    } else if (this.isSuperAdmin == true) {
      this.route.navigateByUrl(`/admin/create/${'admin'}`)
    }
  }

  getUserByCode(): void {
    this.userService.getUserByCode(this.role).subscribe(val => {
      this.listUsers = val.data;
      this.listUsers.forEach(res => {
        if (res.idProfile.bio == null) {
          res.idProfile.bio = "null"
        }
      })
      console.log(val)
    })
  }

  deleteUser(id: string) {
    console.log(this.idUser)
    this.confirmationService.confirm({
      message: 'Apakah anda yakin ingin menghapus data?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.userService.deleteById(id, this.idUser).subscribe(val => { this.removeUser(id) })
      }
    });
  }

  editProduct(user: Users) {
    this.user = { ...user };
    this.productDialog = true;
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  openNew() {
    this.productDialog = true;
  }

  removeUser(id: string): void {
    this.listUsers.forEach((value, index) => {
      if (value.id == id) {
        this.listUsers.splice(index, 1);
      }
    })
  }

}
