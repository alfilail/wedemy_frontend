import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpIntercept } from './shared/intercepts/http-intercept';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    MessageService,
<<<<<<< HEAD
    { provide: HTTP_INTERCEPTORS, useClass: HttpIntercept, multi: true }
=======
    { provide: HTTP_INTERCEPTORS, useClass: HttpIntercept, multi: true },

>>>>>>> 71ba32789c5f957daf951b8e6209ae9dcb6f368b
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
