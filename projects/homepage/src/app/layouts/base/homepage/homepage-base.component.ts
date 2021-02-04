import { Component, OnInit } from '@angular/core';
import { ToastService } from '@bootcamp-homepage/services/toast.service';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-homepage-base',
  templateUrl: './homepage-base.component.html',
  styleUrls: ['./homepage-base.component.css']
})
export class HomepageBaseComponent implements OnInit {

  private successObs: Subscription;
  private errorObs: Subscription;

  constructor(
    private toast: ToastService,
    private msg: MessageService
  ) { }

  ngOnInit(): void {
    // this.callToast();
  }

  ngOnDestroy(): void {
    if (this.successObs) {
      this.successObs.unsubscribe();
    }

    if (this.errorObs) {
      this.errorObs.unsubscribe();
    }
  }

  // callToast():void {
  //   this.successObs = this.toast.successObs.subscribe(val => {
  //     this.msg.add({ severity : 'success', summary : 'Success', detail : val });
  //   });

  //   this.errorObs = this.toast.errorObs.subscribe(val => {
  //     this.msg.add({ severity : 'error', summary : 'Error', detail : val })
  //   })
  // }

}
