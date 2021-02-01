// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { ConfirmationService, MessageService } from 'primeng/api';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptService } from './shared/http-intercept.service';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    // BrowserModule,
    AppRoutingModule,
    SharedModule,
    DashboardModule,
    // BrowserAnimationsModule,
    RouterModule,
    ToastrModule.forRoot(),
    MatCardModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [MessageService, ConfirmationService, DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
