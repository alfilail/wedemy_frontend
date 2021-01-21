import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { ReportReadComponent } from '../../../pages/participant-tutor/report/read/report-read.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ReportReadComponent],
  imports: [
    CommonModule,
    ReportRoutingModule,
    RouterModule
  ]
})
export class ReportModule { }
