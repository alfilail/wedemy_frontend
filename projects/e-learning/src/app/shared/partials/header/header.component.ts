import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@bootcamp-elearning/models/user';
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


  constructor(private authService: AuthService,
    private router: Router,
    private userService: UserService) { }

  ngOnInit(): void {

    if (this.authService.getToken) {
      this.userService.getUserById(this.authService.getUserId()).subscribe(
        res => {
          this.user = res.data;
          console.log(res);
        },
        err => {
          console.log(err);
        }
      )
    }
  }

  logout(): void {
    this.authService.clearToken();
    this.router.navigateByUrl('/auth/login');
  }

}
