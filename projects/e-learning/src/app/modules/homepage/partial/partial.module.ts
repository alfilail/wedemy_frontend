import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../shared/partials/homepage/header/header.component';
import { SidebarComponent } from '../../../shared/partials/homepage/sidebar/sidebar.component';
import { FooterComponent } from '../../../shared/partials/homepage/footer/footer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderComponent, SidebarComponent, FooterComponent],
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
