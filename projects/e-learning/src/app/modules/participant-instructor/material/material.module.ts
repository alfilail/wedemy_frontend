import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialRoutingModule } from './material-routing.module';
import { MaterialReadComponent } from '../../../pages/participant/material/read/material-read.component';


@NgModule({
  declarations: [MaterialReadComponent],
  imports: [
    CommonModule,
    MaterialRoutingModule
  ]
})
export class MaterialModule { }
