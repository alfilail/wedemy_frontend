import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private route: Router) {

  }

  public signOutEmit(): void {
    this.signOut.emit();
  }

  onClick() {
    this.route.navigateByUrl(`pengaturan/${'profil'}`)
  }
}
