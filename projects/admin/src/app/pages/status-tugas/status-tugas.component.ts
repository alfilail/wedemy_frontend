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

  listStatusTugas: SubmissionStatus[] = [];
  statusTugas = new SubmissionStatus();

  constructor(private submissionStatusService: SubmissionStatusService, private messageService: MessageService, private confirmationService: ConfirmationService) {

  }

  ngOnInit(): void {
    this.getSubmissionStatus();
  }

  insertSubmissionStatus() {
    this.submissionStatusService.insertSubmissionStatus(this.statusTugas).subscribe(val => { })
    this.productDialog = false;
  }

  getSubmissionStatus() {
    this.submissionStatusService.getSubmissionStatus().subscribe(val => {
      this.listStatusTugas = val;
      console.log(val)
    })
  }

  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        // this.products = this.products.filter(val => !this.selectedProducts.includes(val));
        // this.selectedProducts = null;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
      }
    });
  }

  editProduct() {
    // this.product = {...product};
    this.productDialog = true;
  }

  deleteProduct() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        // this.products = this.products.filter(val => val.id !== product.id);
        // this.product = {};
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
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
