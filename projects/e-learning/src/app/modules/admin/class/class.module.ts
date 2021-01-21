import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassRoutingModule } from './class-routing.module';
import { ClassCreateComponent } from '../../../pages/admin/class/create/class-create.component';
import { ClassReadComponent } from '../../../pages/admin/class/read/class-read.component';


@NgModule({
  declarations: [ClassCreateComponent, ClassReadComponent],
  imports: [
    CommonModule,
    ClassRoutingModule
  ]
})
export class ClassModule { }
