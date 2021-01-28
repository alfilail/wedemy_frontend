// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from '@bootcamp-elearning/app.component'
import { AppRoutingModule } from '@bootcamp-elearning/app-routing.module';
import { BaseComponent } from './layouts/base/base.component';

@NgModule({
  declarations: [
    AppComponent,
    // BaseComponent
  ],
  imports: [
    // BrowserModule,
    CommonModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
