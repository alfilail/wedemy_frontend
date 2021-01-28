import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { ClassModule } from './class/class.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AboutModule,
    HomeModule,
    ClassModule
  ]
})
export class HomepageModule { }
