import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GradeRoutingModule } from './grade-routing.module';
import { GradeCreateComponent } from '../../../pages/admin/grade/create/grade-create.component';
import { GradeReadComponent } from '../../../pages/admin/grade/read/grade-read.component';


@NgModule({
  declarations: [GradeCreateComponent, GradeReadComponent],
  imports: [
    CommonModule,
    GradeRoutingModule
  ]
})
export class GradeModule { }
