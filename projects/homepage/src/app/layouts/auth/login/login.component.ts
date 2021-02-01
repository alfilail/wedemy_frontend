import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '@bootcamp-homepage/models/users';
import { AuthService } from '@bootcamp-homepage/services/auth.service';
import { ToastService } from '@bootcamp-homepage/services/toast.service';
import { UserService } from '@bootcamp-homepage/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Users = new Users();

  constructor(private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private authService: AuthService,
    private toast: ToastService) 
  { }

  ngOnInit(): void {
  }

  login(): void {
    this.userService.login(this.user).subscribe(val => {
      console.log(val);
      this.authService.saveToken(val.token);
      this.authService.saveProfile(val.profile, this.user);
      console.log(this.authService.getRole());
      this.router.navigateByUrl('/')
      // if (this.authService.getRole() == "ADM") {
      //   this.router.navigateByUrl('/dashboard-adm');
      // } else if (this.authService.getRole() == "CSR") {
      //   this.router.navigateByUrl('/dashboard-csr');
      // }
    })
  }
}
