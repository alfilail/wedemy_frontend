import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '@bootcamp-elearning/app-routing.module';
import { Title } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  providers: [Title],
})
export class AppModule { }
