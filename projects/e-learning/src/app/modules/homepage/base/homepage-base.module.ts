import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageBaseComponent } from '../../../layouts/base/homepage/homepage-base.component';
import { RouterModule } from '@angular/router';
import { PartialModule } from '../partial/partial.module';
import { PrimeNGModule } from '@bootcamp-elearning/shared/prime-ng/prime-ng.module';



@NgModule({
  declarations: [HomepageBaseComponent],
  imports: [
    CommonModule,
    RouterModule,
    PartialModule
  ]
})
export class HomePageBaseModule { }
