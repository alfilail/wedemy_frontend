import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserAdminComponent } from '../../../pages/users/user-admin/user-admin.component';
import { UserTutorComponent } from '../../../pages/users/user-tutor/user-tutor.component';
import { UserStudentComponent } from '../../../pages/users/user-student/user-student.component';
import { CreateTutorComponent } from '../../../pages/users/user-tutor/create-tutor/create-tutor.component';
import { AngMaterialModule } from '../../../shared/ang-material/ang-material.module';
import { PrimeModule } from '../../../shared/prime/prime.module';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    UserAdminComponent,
    UserTutorComponent,
    UserStudentComponent,
    CreateTutorComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    AngMaterialModule,
    PrimeModule,
    SharedModule
  ]
})
export class UserModule { }
