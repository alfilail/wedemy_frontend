import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialRoutingModule } from './material-routing.module';
import { MaterialReadComponent } from '../../../pages/participant-tutor/material/read/material-read.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [MaterialReadComponent],
  imports: [
    CommonModule,
    MaterialRoutingModule,
    RouterModule
  ]
})
export class MaterialModule { }
