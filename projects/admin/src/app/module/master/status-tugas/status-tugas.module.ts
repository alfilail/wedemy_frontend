import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusTugasRoutingModule } from './status-tugas-routing.module';
import { StatusTugasComponent } from '../../../pages/status-tugas/status-tugas.component';
import { AngMaterialModule } from '../../../shared/ang-material/ang-material.module';
import { PrimeModule } from '../../../shared/prime/prime.module';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [StatusTugasComponent],
  imports: [
    CommonModule,
    StatusTugasRoutingModule,
    SharedModule,
    AngMaterialModule,
    PrimeModule,
  ]
})
export class StatusTugasModule { }
