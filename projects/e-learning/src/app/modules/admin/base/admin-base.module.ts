import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminBaseComponent } from '../../../layouts/base/admin/admin-base.component';
import { RouterModule } from '@angular/router';
import { PartialModule } from '../partial/partial.module';



@NgModule({
  declarations: [AdminBaseComponent],
  imports: [
    CommonModule,
    RouterModule,
    PartialModule
  ]
})
export class AdminBaseModule { }
