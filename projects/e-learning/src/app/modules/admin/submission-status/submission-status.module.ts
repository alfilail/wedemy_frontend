import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubmissionStatusRoutingModule } from './submission-status-routing.module';
import { SubmissionStatusCreateComponent } from '../../../pages/admin/submission-status/create/submission-status-create.component';
import { SubmissionStatusReadComponent } from '../../../pages/admin/submission-status/read/submission-status-read.component';


@NgModule({
  declarations: [SubmissionStatusCreateComponent, SubmissionStatusReadComponent],
  imports: [
    CommonModule,
    SubmissionStatusRoutingModule
  ]
})
export class SubmissionStatusModule { }
