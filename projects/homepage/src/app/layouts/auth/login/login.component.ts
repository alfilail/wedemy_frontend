import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ROLE } from '@bootcamp-homepage/constants/roles';
import { Users } from '@bootcamp-homepage/models/users';
import { AuthService } from '@bootcamp-homepage/services/auth.service';
import { ToastService } from '@bootcamp-homepage/services/toast.service';
import { UserService } from '@bootcamp-homepage/services/user.service';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Users = new Users();
  private successObs: Subscription;
  private errorObs: Subscription;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private authService: AuthService,
    private toast: ToastService,
    private msg: MessageService) { }

  ngOnInit(): void {
    // this.callToast();
  }

  login(): void {
    this.userService.login(this.user).subscribe(val => {
      console.log("hai "+ val.token);
      this.authService.saveToken(val.token);
      this.authService.saveProfile(val.profile, this.user);
      console.log(this.authService.getRole());
      if (this.authService.getRole() == ROLE.PARTICIPANT) {
        this.router.navigateByUrl('/')
      } else if (this.authService.getRole() == ROLE.ADMIN) {
        this.router.navigateByUrl('/admin/dashboard');
      } else if (this.authService.getRole() == ROLE.TUTOR) {
        this.router.navigateByUrl('/');
      } else if (this.authService.getRole() == ROLE.SPRADMIN) {
        this.router.navigateByUrl('/');
      }
    })
  }

  // callToast():void {
  //   this.successObs = this.toast.successObs.subscribe(val => {
  //     this.msg.add({ severity : 'success', summary : 'Success', detail : val, sticky: true });
  //   });

  //   this.errorObs = this.toast.errorObs.subscribe(val => {
  //     this.msg.add({ severity : 'error', summary : 'Error', detail : val, sticky: true })
  //   })
  // }
}
