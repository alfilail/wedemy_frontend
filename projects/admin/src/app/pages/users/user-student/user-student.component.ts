import { Component, OnInit } from '@angular/core';
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

  listUsers = [
    { username: 'admin1', roleCode: 'adm', name: 'Imron Rosyadi' },
    { username: 'tutor1', roleCode: 'ttr', name: 'Nur Alfilail' },
    { username: 'tutor2', roleCode: 'ttr', name: 'Atalya Yoseba' },
    { username: 'student1', roleCode: 'std', name: 'Dina Kasturi' },
    { username: 'student2', roleCode: 'std', name: 'Anggi Alberto' },
  ]

  user: any[] = this.listUsers;

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService) {

  }

  ngOnInit(): void {
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
    for (let i = 0; i < this.listUsers.length; i++) {
      if (this.listUsers[i].username === id) {
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
