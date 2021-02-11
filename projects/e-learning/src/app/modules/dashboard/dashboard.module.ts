import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonModule } from 'primeng/skeleton';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from '@bootcamp-elearning/pages/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    SkeletonModule
  ]
})
export class DashboardModule { }
