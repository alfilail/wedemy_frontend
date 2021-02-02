import { Component, OnInit } from '@angular/core';
import { Users } from '@bootcamp-admin/model/users';
import { UserService } from '@bootcamp-admin/service/user.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-user-student',
  templateUrl: './user-student.component.html',
  styleUrls: ['./user-student.component.css'],
  styles: []
})
export class UserStudentComponent implements OnInit {

  productDialog: boolean;
  rangeDates: Date[];
  submitted: boolean;
  statuses: any[];
  listUsers: Users[] = []

  constructor(private userService: UserService, private messageService: MessageService, private confirmationService: ConfirmationService) {

  }

  ngOnInit(): void {
    this.getUserByCode();
  }

  getUserByCode(): void {
    this.userService.getUserByCode('PCP').subscribe(val => {
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
