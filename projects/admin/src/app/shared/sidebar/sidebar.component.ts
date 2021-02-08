import { Component } from '@angular/core';
import { AuthService } from '@bootcamp-admin/service/auth.service';
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

  constructor(private auth: AuthService) {

  }

  public openUiElements() {
    this.isOpenUiElements = !this.isOpenUiElements;
  }

  ngOnInit(): void {
    if (this.auth.getRole() == 'ADM') {
      this.isSuperAdmin = false;
    } else {
      this.isSuperAdmin = true;

    }
  }

}
