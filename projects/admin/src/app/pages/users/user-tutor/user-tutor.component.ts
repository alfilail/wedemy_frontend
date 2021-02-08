import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Users } from '../../../model/users';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-user-tutor',
  templateUrl: './user-tutor.component.html',
  styleUrls: ['./user-tutor.component.css']
})
export class UserTutorComponent implements OnInit {

  productDialog: boolean;
  rangeDates: Date[];
  submitted: boolean;
  statuses: any[];

  user: Users;
  listUsers: Users[] = [];

  constructor(private route: Router, private userService: UserService, private messageService: MessageService, private confirmationService: ConfirmationService) {

  }

  ngOnInit(): void {
    this.getUserByCode();
  }

  getUserByCode(): void {
    this.userService.getUserByCode('TTR').subscribe(val => {
      this.listUsers = val.data;
      console.log(val)
    })
  }

  createTutor() {
    this.route.navigateByUrl(`/admin/create/${'tutor'}`)
  }

  deleteUser(id: string) {
    this.confirmationService.confirm({
      message: 'Apakah anda yakin ingin menghapus data?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.userService.deleteById(id).subscribe(val => { this.removeUser(id) })
      }
    });
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
