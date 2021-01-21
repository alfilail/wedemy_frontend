import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../../shared/partials/participant-instructor/sidebar/sidebar.component';
import { HeaderComponent } from '../../../shared/partials/participant-instructor/header/header.component';
import { FooterComponent } from '../../../shared/partials/participant-instructor/footer/footer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SidebarComponent, HeaderComponent, FooterComponent],
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
