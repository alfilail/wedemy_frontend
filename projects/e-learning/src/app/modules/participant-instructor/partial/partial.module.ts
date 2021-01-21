import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../../shared/partials/participant-tutor/sidebar/sidebar.component';
import { HeaderComponent } from '../../../shared/partials/participant-tutor/header/header.component';
import { FooterComponent } from '../../../shared/partials/participant-tutor/footer/footer.component';
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
