import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ROLE } from '@bootcamp-homepage/constants/roles';
import { Users } from '@bootcamp-homepage/models/users';
import { AuthService } from '@bootcamp-homepage/services/auth.service';
import { UserService } from '@bootcamp-homepage/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: Users = new Users();
  isLoggedOut: boolean;
  firstName: string;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.isLoggedOut = !this.authService.getToken();
    
    if (!this.isLoggedOut){
      this.userService.getUserById(this.authService.getUserId()).subscribe(res => {
        this.user = res;
        this.getFirstName(res.idProfile.fullName);
      })
    }
    
    console.log(this.isLoggedOut);

  }

  logout(): void{
    this.authService.clearToken();
    this.isLoggedOut = true;
    this.router.navigateByUrl('/auth/login');
  }

  dashboard(): void{
    if(this.authService.getRole() == ROLE.PARTICIPANT){
      this.router.navigateByUrl('/participant/dashboard');
    } else if(this.authService.getRole() == ROLE.TUTOR){
      this.router.navigateByUrl('/instructor/dashboard');
    }
  }

  getFirstName(fullName: any): void{
    let names = fullName.split(' ');
    this.firstName = names[0][0].toUpperCase() + names[0].slice(1);
  }
}
