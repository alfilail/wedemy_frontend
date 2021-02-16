import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpIntercept } from './shared/intercepts/http-intercept';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { PrimeNGModule } from './shared/prime-ng/prime-ng.module';
import * as moment from 'moment';
import { RouterModule } from '@angular/router';
import { CanActivateTeam } from './shared/guards/classes/can-activate-team';
import { Permissions } from '@bootcamp-homepage/shared/guards/classes/permissions';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastModule
  ],
  providers: [
    MessageService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpIntercept, multi: true },
    CanActivateTeam, Permissions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
