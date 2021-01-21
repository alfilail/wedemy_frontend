import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ParticipantReadComponent } from '../../../pages/admin/user/participant/read/participant-read.component';
import { InstructorReadComponent } from '../../../pages/admin/user/instructor/read/instructor-read.component';
import { InstructorCreateComponent } from '../../../pages/admin/user/instructor/create/instructor-create.component';
import { ParticipantCreateComponent } from '../../../pages/admin/user/participant/create/participant-create.component';


@NgModule({
  declarations: [ParticipantReadComponent, InstructorReadComponent, InstructorCreateComponent, ParticipantCreateComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
