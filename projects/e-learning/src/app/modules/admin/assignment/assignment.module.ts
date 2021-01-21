import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignmentRoutingModule } from './assignment-routing.module';
import { AssigmentReadComponent } from '../../../pages/admin/assignment/read/assigment-read.component';
import { AssigmentCreateComponent } from '../../../pages/admin/assignment/create/assigment-create.component';


@NgModule({
  declarations: [AssigmentReadComponent, AssigmentCreateComponent],
  imports: [
    CommonModule,
    AssignmentRoutingModule
  ]
})
export class AssignmentModule { }
