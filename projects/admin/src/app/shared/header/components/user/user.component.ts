import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@bootcamp-admin/service/auth.service';
import { routes } from '../../../../consts';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  // @Input() user: User;
  @Output() signOut: EventEmitter<void> = new EventEmitter<void>();
  public routes: typeof routes = routes;
  public flatlogicEmail: string = "https://flatlogic.com";

  constructor(private route: Router, private auth: AuthService) {

  }

  public signOutEmit(): void {
    this.auth.clearToken();
    this.route.navigateByUrl('/home')
  }

  onClick() {
    this.route.navigateByUrl(`pengaturan/${'profil'}`)
  }
}
