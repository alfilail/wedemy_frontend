import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { TooltipModule } from 'primeng/tooltip';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToolbarModule } from 'primeng/toolbar';
import { CalendarModule } from 'primeng/calendar';
import { InputMaskModule } from 'primeng/inputmask';
import { PasswordModule } from 'primeng/password';
// import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    DialogModule,
    ConfirmPopupModule,
    TooltipModule,
    ToolbarModule,
    ConfirmDialogModule,
    CalendarModule,
    InputMaskModule,
    PasswordModule
    // ToastModule
  ],
  exports: [
    TableModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    DialogModule,
    ConfirmPopupModule,
    TooltipModule,
    ToolbarModule,
    ConfirmDialogModule,
    CalendarModule,
    InputMaskModule,
    PasswordModule
    // ToastModule
  ]
})
export class PrimeModule { }
