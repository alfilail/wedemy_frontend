import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from '../../../pages/homepage/home/home.component';
import { PrimeNGModule } from '@bootcamp-elearning/shared/prime-ng/prime-ng.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    PrimeNGModule
  ]
})
export class HomeModule { }
