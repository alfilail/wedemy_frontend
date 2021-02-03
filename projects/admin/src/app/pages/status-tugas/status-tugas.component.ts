import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SubmissionStatus } from '../../model/submission-status';
import { SubmissionStatusService } from '../../service/submission-status.service';

@Component({
  selector: 'app-status-tugas',
  templateUrl: './status-tugas.component.html',
  styleUrls: ['./status-tugas.component.scss'],
  styles: []
})
export class StatusTugasComponent implements OnInit {

  productDialog: boolean;
  rangeDates: Date[];
  submitted: boolean;
  statuses: any[];
  update: boolean;
  listStatusTugas: SubmissionStatus[] = [];
  statusTugas = new SubmissionStatus();

  constructor(private submissionStatusService: SubmissionStatusService, private messageService: MessageService, private confirmationService: ConfirmationService) {

  }

  ngOnInit(): void {
    this.getSubmissionStatus();
  }

  insertSubmissionStatus() {
    this.submissionStatusService.insertSubmissionStatus(this.statusTugas).subscribe(val => {
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Status Tugas telah dibuat.', life: 3000 });
      this.productDialog = false;
      this.listStatusTugas.push(this.statusTugas);
    })
  }

  updateSubmissionStatus() {
    console.log('update')
    this.submissionStatusService.updateSubmissionStatus(this.statusTugas).subscribe(val => {
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Status Tugas telah dibuat.', life: 3000 });
      this.productDialog = false; this.update = false;
    })
  }

  getSubmissionStatus() {
    this.submissionStatusService.getSubmissionStatus().subscribe(val => {
      this.listStatusTugas = val;
      console.log(val)
    })
  }

  editSubStatus(statusTugas: SubmissionStatus) {
    statusTugas.createdAt = null;
    statusTugas.updatedAt = null;
    this.statusTugas = { ...statusTugas };
    this.productDialog = true; this.update = true;
  }

  deleteSubmissionStatus(id: string) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.submissionStatusService.deleteById(id).subscribe(val => {
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
    this.statusTugas = new SubmissionStatus();
    this.productDialog = true; this.update = false;
  }

}
