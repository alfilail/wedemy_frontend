import { Component, OnInit } from '@angular/core';
import { Approvements } from '@bootcamp-admin/model/approvements';
import { ApprovementService } from '@bootcamp-admin/service/approvement.service';
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

  listApprovements: Approvements[] = []
  approvement = new Approvements();

  constructor(private aprovementService: ApprovementService, private messageService: MessageService, private confirmationService: ConfirmationService) {

  }

  ngOnInit(): void {
    this.getApprovements();
  }

  insertApprovement(): void {
    this.submitted = true;
    this.aprovementService.insertApprovement(this.approvement).subscribe(val => { })
    this.productDialog = false;
  }

  getApprovements(): void {
    this.aprovementService.getApprovements().subscribe(val => {
      this.listApprovements = val;
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

  saveProduct() {
    this.submitted = true;

    // if (this.product.name.trim()) {
    // if (this.product.id) {
    // this.products[this.findIndexById(this.product.id)] = this.product;
    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
    // }
    // else {
    // this.product.id = this.createId();
    // this.product.image = 'product-placeholder.svg';
    // this.products.push(this.product);
    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
    // }

    // this.products = [...this.products];
    this.productDialog = false;
    // this.product = {};
  }
  // }

  openNew() {
    this.productDialog = true;
    this.submitted = false;
  }

}
