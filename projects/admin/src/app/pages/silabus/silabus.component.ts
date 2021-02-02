import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Modules } from '../../model/modules';
import { ModuleService } from '../../service/module.service';

@Component({
  selector: 'app-silabus',
  templateUrl: './silabus.component.html',
  styleUrls: ['./silabus.component.scss'],
  styles: []
})
export class SilabusComponent implements OnInit {

  productDialog: boolean;
  rangeDates: Date[];
  submitted: boolean;
  statuses: any[];
  update: boolean;
  listSilabus: Modules[] = [];
  module = new Modules();

  constructor(private moduleService: ModuleService, private messageService: MessageService, private confirmationService: ConfirmationService) {

  }

  ngOnInit(): void {
    this.getModules()
  }

  insertModule(): void {
    this.moduleService.insertModules(this.module).subscribe(val => {
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Silabus telah dibuat', life: 3000 });
      this.productDialog = false;
      this.listSilabus.push(this.module)
    })
  }

  updateModule(): void {
    console.log('update')
    this.moduleService.updateModule(this.module).subscribe(val => {
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Silabus telah dibuat', life: 3000 });
      this.productDialog = false; this.update = false;
    })
  }

  getModules(): void {
    this.moduleService.getModules().subscribe(val => {
      this.listSilabus = val;
      console.log(val)
    })
  }

  editModule(module: Modules) {
    module.createdAt = null;
    module.updatedAt = null;
    this.module = { ...module };
    this.productDialog = true; this.update = true;
  }

  deleteModule(id: string) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.moduleService.deleteById(id, '31f587f7-ee4f-40b3-bc10-51fb850f3685').subscribe(val => {
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
    this.module = new Modules()
    this.productDialog = true; this.update = false;
  }
}
