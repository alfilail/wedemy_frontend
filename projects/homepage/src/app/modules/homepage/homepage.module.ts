import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { ClassModule } from './class/class.module';
import { HttpClientModule } from '@angular/common/http';
import {Location} from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AboutModule,
    HomeModule,
    ClassModule,
    // Location
    // HttpClientModule
  ]
})
export class HomepageModule { }
