import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticipantBaseComponent } from '../../../layouts/base/participant-instructor/participant-base.component';
import { RouterModule } from '@angular/router';
import { PartialModule } from '../partial/partial.module';



@NgModule({
  declarations: [ParticipantBaseComponent],
  imports: [
    CommonModule,
    RouterModule,
    PartialModule
  ]
})
export class ParticipantBaseModule { }
