import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { ReportReadComponent } from '../../../pages/participant-tutor/report/read/report-read.component';


@NgModule({
  declarations: [ReportReadComponent],
  imports: [
    CommonModule,
    ReportRoutingModule
  ]
})
export class ReportModule { }
