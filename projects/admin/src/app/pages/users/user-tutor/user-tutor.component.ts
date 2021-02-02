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
      this.listUsers = val;
      console.log(val)
    })
  }

  createTutor() {
    this.route.navigateByUrl(`/admin/create/${'tutor'}`)
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(val => {
      this.listUsers = val;
      console.log(val)
    })
  }

  deleteUser(id: string) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.userService.deleteById(id).subscribe(val => {
          this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Nilai telah dihapus.', life: 3000 });
        })
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

}
