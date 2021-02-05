import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Profiles } from '@bootcamp-admin/model/profiles';
import { AuthService } from '@bootcamp-admin/service/auth.service';
import { ProfileService } from '@bootcamp-admin/service/profile.service';
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
  idProfile: string;
  profile: Profiles = new Profiles();
  defaultImg: string = "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg";

  constructor(private profileService: ProfileService, private route: Router, private auth: AuthService) {

  }

  ngOnInit(): void {
    this.idProfile = this.auth.getProfileId();
    this.getProfile();
  }

  public signOutEmit(): void {
    this.auth.clearToken();
    this.route.navigateByUrl('/home')
  }

  onClick() {
    this.route.navigateByUrl(`pengaturan/${'profil'}`)
  }

  getProfile(): void {
    this.profileService.getProfileById(this.idProfile).subscribe(val => {
      this.profile = val.data;
    })
  }
}
