import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  // successObs = new Subject<string>();
  // errorObs = new Subject<string>();

  constructor(private msg: MessageService) { }

  // successToast(msgStr: string): void {
  //   this.successObs.next(msgStr);
  // }

  // errorToast(msgStr: string): void {
  //   this.errorObs.next(msgStr);
  // }

  successToast(msgStr: string): void {
    this.msg.add({ severity: 'success', summary: 'Success', detail: msgStr })
  }

  errorToast(msgStr: string): void {
    this.msg.add({ severity: 'error', summary: 'Error', detail: msgStr })
  }
}
