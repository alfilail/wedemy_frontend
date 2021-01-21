import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassRoutingModule } from './class-routing.module';
import { ClassReadComponent } from '../../../pages/homepage/class/read/class-read.component';
import { ClassDetailComponent } from '../../../pages/homepage/class/detail/class-detail.component';


@NgModule({
  declarations: [ClassReadComponent, ClassDetailComponent],
  imports: [
    CommonModule,
    ClassRoutingModule
  ]
})
export class ClassModule { }
