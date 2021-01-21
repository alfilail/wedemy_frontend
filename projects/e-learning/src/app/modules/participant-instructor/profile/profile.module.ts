import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileEditComponent } from '../../../pages/participant-tutor/profile/edit/profile-edit.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ProfileEditComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    RouterModule
  ]
})
export class ProfileModule { }
