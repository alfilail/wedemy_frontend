import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { PrimeNGModule } from '@bootcamp-elearning/shared/prime-ng/prime-ng.module';
import { LoginComponent } from '@bootcamp-elearning/layouts/auth/login/login.component';
import { RegisterComponent } from '@bootcamp-elearning/layouts/auth/register/register.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule,
    PrimeNGModule
  ]
})
export class AuthModule { }
