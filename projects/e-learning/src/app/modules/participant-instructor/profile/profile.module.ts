import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileEditComponent } from '../../../pages/participant-tutor/profile/edit/profile-edit.component';


@NgModule({
  declarations: [ProfileEditComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
