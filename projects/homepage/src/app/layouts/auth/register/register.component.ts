import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ROLE } from '@bootcamp-homepage/constants/roles';
import { Users } from '@bootcamp-homepage/models/users';
import { ToastService } from '@bootcamp-homepage/services/toast.service';
import { UserService } from '@bootcamp-homepage/services/user.service';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  participant: Users = new Users();
  // private successObs: Subscription;
  // private errorObs: Subscription;

  fullnameValid: boolean = true;
  fullnameErrorMsg: string;

  emailValid: boolean = true;
  emailErrorMsg: string;

  usernameValid: boolean = true;
  usernameErrorMsg: string;

  passwordValid: boolean = true;
  passwordErrorMsg: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    // private toast: ToastService,
    // private msg: MessageService
  ) { }

  ngOnInit(): void {
    this.participant.idRole.code = ROLE.PARTICIPANT;
    // this.callToast();
  }

  save() {
    // if (this.fullnameValid && this.emailValid && this.usernameValid && this.passwordValid) {
    //   this.userService.insertUser(this.participant)
    //     .subscribe(val => {
    //       // this.toast.successToast("Akun Anda berhasil dibuat! Silahkan login untuk masuk.")
    //       this.showConfirm();
    //       // this.router.navigateByUrl("/auth/login")
    //       console.log(val);
    //     }, (err => { this.toast.errorToast("Register gagal") }))
    // } else {
    //   this.toast.errorToast("Data tidak valid");
    // }

    if (this.fullnameValid && this.emailValid && this.usernameValid && this.passwordValid) {
      this.userService.insertUser(this.participant)
        .subscribe(val => {
          // this.showConfirm();
          console.log(val);
        })
    } else {
      // this.toast.errorToast("Data tidak valid");
    }

  }

  // ngOnDestroy(): void {
  //   if (this.successObs) {
  //     this.successObs.unsubscribe();
  //   }

  //   if (this.errorObs) {
  //     this.errorObs.unsubscribe();
  //   }
  // }

  // callToast():void {
  //   this.successObs = this.toast.successObs.subscribe(val => {
  //     this.msg.add({ severity : 'success', summary : 'Success', detail : val, sticky: true });
  //   });

  //   this.errorObs = this.toast.errorObs.subscribe(val => {
  //     this.msg.add({ severity : 'error', summary : 'Error', detail : val, sticky: true })
  //   })
  // }

  // showConfirm() {
  //   this.msg.clear();
  //   this.msg.add({ key: 'success', sticky: true, severity: 'success', summary: 'Akun Anda berhasil dibuat!', detail: 'Silahkan login untuk masuk.' });
  // }

  // onConfirm() {
  //   this.router.navigateByUrl("/auth/login");
  //   this.msg.clear('success');
  // }

  // onReject() {
  //   this.msg.clear('success');
  // }

  fullnameValidation(event: string): void {
    if (event.length == 0) {
      this.fullnameValid = false;
      this.fullnameErrorMsg = "Nama lengkap tidak boleh kosong";
    } else {
      this.fullnameValid = true;
    }
  }

  emailValidation(event: string): void {
    if (event.length == 0) {
      this.emailValid = false;
      this.emailErrorMsg = "Email tidak boleh kosong";
    } else {
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(event)) {
        this.emailValid = false;
        this.emailErrorMsg = "Alamat email tidak valid";
      } else {
        this.emailValid = true;
      }
    }
  }

  usernameValidation(event: string): void {
    if (event.length == 0) {
      this.usernameValid = false;
      this.usernameErrorMsg = "Username tidak boleh kosong";
    } else {
      this.usernameValid = true;
    }
  }

  passwordValidation(event: string): void {
    if (event.length < 8) {
      this.passwordValid = false;
      this.passwordErrorMsg = "Password minimal 8 karakter"
    } else {
      this.passwordValid = true;
    }
  }
}
