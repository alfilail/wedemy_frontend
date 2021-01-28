import { Component, OnInit } from '@angular/core';
import { DetailClasses } from '@bootcamp-admin/model/dtl-classes';
import { DtlClassService } from '@bootcamp-admin/service/dtl-class.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Classes } from '../../model/classes';
import { ClassService } from '../../service/class.service';

@Component({
  selector: 'app-kelas',
  templateUrl: './kelas.component.html',
  styleUrls: ['./kelas.component.scss'],
  styles: [`:host ::ng-deep .p-dialog .product-image {
    width: 150px;
    margin: 0 auto 2rem auto;
    display: block;}`]
})
export class KelasComponent implements OnInit {

  productDialog: boolean;
  rangeDates: Date[];
  submitted: boolean;
  statuses: any[];


  listKelas: DetailClasses[] = [];

  constructor(private dtlClsService: DtlClassService, private messageService: MessageService, private confirmationService: ConfirmationService) {

  }

  ngOnInit(): void {
    this.getClasses();
  }

  getClasses() {
    this.dtlClsService.getDetailClasses().subscribe(val => {
      this.listKelas = val;
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

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.listKelas.length; i++) {
      if (this.listKelas[i].code === id) {
        index = i;
        break;
      }
    }
    return index;
  }

  openNew() {
    this.productDialog = true;
  }
}
