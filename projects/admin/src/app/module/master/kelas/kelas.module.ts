import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KelasRoutingModule } from './kelas-routing.module';
import { KelasComponent } from '../../../pages/kelas/kelas.component';
import { CreateKelasComponent } from '../../../pages/kelas/create-kelas/create-kelas.component';
import { AngMaterialModule } from '../../../shared/ang-material/ang-material.module';
import { PrimeModule } from '../../../shared/prime/prime.module';
import { SharedModule } from '../../../shared/shared.module';
import * as moment from 'moment';
@NgModule({
  declarations: [
    KelasComponent,
    CreateKelasComponent
  ],
  imports: [
    CommonModule,
    KelasRoutingModule,
    AngMaterialModule,
    PrimeModule,
    SharedModule,
  ]
})
export class KelasModule { }
