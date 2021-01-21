import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutModule } from './about/about.module';
import { ClassModule } from './class/class.module';
import { HomeModule } from './home/home.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AboutModule,
    ClassModule,
    HomeModule
  ]
})
export class HomepageModule { }
