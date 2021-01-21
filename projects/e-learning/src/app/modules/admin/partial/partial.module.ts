import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../../shared/partials/admin/footer/footer.component';
import { HeaderComponent } from '../../../shared/partials/admin/header/header.component';
import { SidebarComponent } from '../../../shared/partials/admin/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [FooterComponent, HeaderComponent, SidebarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ]
})
export class PartialModule { }
