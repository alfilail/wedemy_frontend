import { Component } from '@angular/core';
import { routes } from '../../consts/routes';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  public routes: typeof routes = routes;
  isSuperAdmin: boolean;
  panelOpenState = false;
  public isOpenUiElements = false;

  public openUiElements() {
    this.isOpenUiElements = !this.isOpenUiElements;
  }

  ngOnInit(): void {
    this.isSuperAdmin = false;
  }

}
