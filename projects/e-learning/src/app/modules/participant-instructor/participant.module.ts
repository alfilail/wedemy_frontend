import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassModule } from './class/class.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { MaterialModule } from './material/material.module';
import { ProfileModule } from './profile/profile.module';
import { ReportModule } from './report/report.module';
import { UserModule } from '../admin/user/user.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserModule
  ]
})
export class ParticipantModule { }
