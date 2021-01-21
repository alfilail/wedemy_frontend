import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassRoutingModule } from './class-routing.module';
import { ClassReadComponent } from '../../../pages/participant-tutor/class/read/class-read.component';


@NgModule({
  declarations: [ClassReadComponent],
  imports: [
    CommonModule,
    ClassRoutingModule
  ]
})
export class ClassModule { }
