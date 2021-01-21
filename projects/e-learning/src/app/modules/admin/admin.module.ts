import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignmentModule } from './assignment/assignment.module';
import { ClassModule } from './class/class.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { GradeModule } from './grade/grade.module';
import { ModuleModule } from './module/module.module';
import { ProfileModule } from './profile/profile.module';
import { SubmissionStatusModule } from './submission-status/submission-status.module';
import { UserModule } from './user/user.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AssignmentModule,
    ClassModule,
    DashboardModule,
    GradeModule,
    ModuleModule,
    ProfileModule,
    SubmissionStatusModule,
    UserModule
  ]
})
export class AdminModule { }
