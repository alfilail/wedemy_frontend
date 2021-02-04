import { Component, OnInit } from '@angular/core';
import { Approvements } from '@bootcamp-admin/model/approvements';
import { ApprovementService } from '@bootcamp-admin/service/approvement.service';
import { AuthService } from '@bootcamp-admin/service/auth.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-persetujuan-absen',
  templateUrl: './persetujuan-absen.component.html',
  styleUrls: ['./persetujuan-absen.component.scss']
})
export class PersetujuanAbsenComponent implements OnInit {

  productDialog: boolean;
  rangeDates: Date[];
  submitted: boolean;
  statuses: any[];
  update: boolean = false;
  listApprovements: Approvements[] = []
  approvement = new Approvements();
  idUser: string;

  constructor(private auth: AuthService, private aprovementService: ApprovementService, private messageService: MessageService, private confirmationService: ConfirmationService) {
    this.idUser = auth.getUserId()
  }

  ngOnInit(): void {
    this.getApprovements();
  }

  insertApprovement(): void {
    this.aprovementService.insertApprovement(this.approvement).subscribe(val => {
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Nilai telah dibuat.', life: 3000 });
      this.productDialog = false;
      this.listApprovements.push(this.approvement)
    })
  }

  updateApprovement(): void {
    console.log('update')
    this.aprovementService.updateApprovement(this.approvement).subscribe(val => {
      this.productDialog = false;
      this.update = false;
    })
  }

  getApprovements(): void {
    this.aprovementService.getApprovements().subscribe(val => {
      this.listApprovements = val.data;
      console.log(val)
    })
  }

  editApprovement(approvement: Approvements) {
    approvement.createdAt = null;
    approvement.updatedAt = null;
    this.approvement = { ...approvement };
    this.productDialog = true; this.update = true;
  }

  deleteApprovement(id: string) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.aprovementService.deleteById(id, this.idUser).subscribe(val => { })
      }
    });
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  openNew() {
    this.approvement = new Approvements();
    this.productDialog = true;
    this.submitted = false; this.update = false;
  }

}
