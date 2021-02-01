import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ROLE } from '@bootcamp-homepage/constants/roles';
import { Users } from '@bootcamp-homepage/models/users';
import { ToastService } from '@bootcamp-homepage/services/toast.service';
import { UserService } from '@bootcamp-homepage/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  participant: Users = new Users();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private toast: ToastService
  ) { }

  ngOnInit(): void {
    this.participant.idRole.code = ROLE.PARTICIPANT;
  }

  save() {
      this.userService.insertUser(this.participant)
      .subscribe(val => {
        this.toast.successToast("Akun Anda berhasil dibuat! Silahkan login untuk masuk.")
        this.router.navigateByUrl("/auth/login")
        console.log(val);
      }, (err => {this.toast.errorToast("Register gagal")}))
  }

}
